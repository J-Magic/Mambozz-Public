import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  useColorScheme,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';

import { Auth } from 'aws-amplify';
import { useAuth } from '@/context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSessionCache } from '@/context/auth';

// import { useSelector, useDispatch } from 'react-redux';
// import { selectLoggedIn, setLoggedIn } from '../slices/navSlice';

import { useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Email_Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState();
  const router = useRouter();
  const { signIn } = useAuth();
  const colorScheme = useColorScheme();
  let initialProfileStatus: string | null;

  useEffect(() => {
    // const getProfileState = async () => {
    //   initialProfileStatus = await AsyncStorage.getItem('USER_INITIAL_PROFILE');
    //   console.log(
    //     'USER STATUS RETRIEVED FROM LOCAL STORE - LOGIN SCREEN :',
    //     initialProfileStatus
    //   );
    // };
    // getProfileState();
    //
  }, []);

  const getProfileState = async () => {
    initialProfileStatus = await userSessionCache.getUser(
      'USER_INITIAL_PROFILE'
    );
    console.log(
      'USER PROFILE STATUS RETRIEVED FROM LOCAL STORE - LOGIN SCREEN :',
      initialProfileStatus
    );
  };

  type FormData = {
    email: string;
    password: string;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const pwd = watch('password');

  console.log(errors);

  const toSignUp = () => {
    // navigation.navigate('SignUpScreen');
    router.replace('/(auth)/signup');
  };

  const onLogIn = async (data: FormData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      // const response = await Auth.signIn(data.email, data.password);
      const response = await signIn(data.email, data.password);
      if (response) {
        console.log('Response from Login :', response);
        console.log('User ID: ', response.attributes.sub);
        if (initialProfileStatus === 'set') {
          // router.push('/');
          router.push('/(app)/(tabs)/');
        } else {
          router.replace('/(app)/profile');
        }
      }

      // if (response) {
      //   setUser(response);
      // } else setUser(null);

      // if (response) {
      //   // navigation.push('Home');
      //   navigation.popToTop();
      // }
    } catch (e: any) {
      Alert.alert(
        'This user does not exist!',
        'Check credentials or signup if you dont have an account  '
      );
    }
    setLoading(false);
  };

  const onForgotPassword = () => {
    // navigation.navigate('Forgot Password');
    router.replace('/forgotPassword');
  };

  getProfileState();
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Stack.Screen
          options={{
            title: 'Login',
            headerTintColor: colorScheme === 'light' ? '#000' : '#FFCB45',
          }}
        />
        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Email is required',
            pattern: {
              value: Email_Regex,
              message: 'Enter a valid email address',
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <View
                style={[
                  styles.container,
                  { borderColor: error ? 'red' : 'black' },
                ]}
              >
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={'Email'}
                  style={styles.input}
                />
              </View>
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginHorizontal: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name='password'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should have a minumum of 6 characters',
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <View
                style={[
                  styles.container,
                  { borderColor: error ? 'red' : 'black' },
                ]}
              >
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={'Password'}
                  secureTextEntry
                  style={styles.input}
                />
              </View>
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginHorizontal: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </>
          )}
        />

        <TouchableOpacity
          onPress={handleSubmit(onLogIn)}
          style={[
            styles.formButton,
            {
              backgroundColor: '#000',
              borderColor: colorScheme === 'light' ? '#000' : '#FFCB45',
            },
          ]}
        >
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#FFCB45',
              // color: Colors[colorScheme ? 'light' : 'dark'].text2,
            }}
          >
            {loading ? 'Loading...' : 'Log In'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onForgotPassword}
          style={[
            styles.formButton,
            {
              backgroundColor: '#000',
              borderColor: colorScheme === 'light' ? '#000' : '#FFCB45',
            },
          ]}
        >
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#FFCB45',
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: colorScheme === 'light' ? '#000' : '#fff',
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={toSignUp}
          style={[
            styles.formButton,
            {
              backgroundColor: '#000',
              borderColor: colorScheme === 'light' ? '#000' : '#FFCB45',
            },
          ]}
        >
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#FFCB45',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 8,
  },

  input: {
    height: 50,
    justifyContent: 'center',
  },
  formButton: {
    // backgroundColor: 'rgba(255, 199, 0, 0.25)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    // borderColor: 'black',
  },
});
