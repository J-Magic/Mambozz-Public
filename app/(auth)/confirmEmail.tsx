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
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';

import { Auth } from 'aws-amplify';

import { useAppSelector } from '@/Store';
import { useAuth } from '../../context/auth';
import { useRouter, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Email_Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const confirmEmail = () => {
  const { height } = useWindowDimensions();
  const router = useRouter();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const paramsEmail = useAppSelector((state) => state.nav.email);
  const { confirmMail, resendCode } = useAuth();
  const colorScheme = useColorScheme();

  type FormData = {
    email: string;
    code: string;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: { email: paramsEmail, code: '' } });

  const userEmail: string = watch('email');
  console.log('Params Email Ad: ', paramsEmail);

  const onResendCode = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await resendCode(userEmail);
      // const response = await Auth.resendSignUp(userEmail);
      // console.log(response);
      Alert.alert('Success', 'The code was resent to your email');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onConfirmEmail = async (data: FormData) => {
    // const { email, code } = data
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await confirmMail(data.email, data.code);
      if (response) {
        console.log('Response from confirmEmail :', response);
        router.replace('/(auth)/login');
      }
      // const response = await Auth.confirmSignUp(data.email, data.code);
      // console.log(response);
      // if (response) {
      //   navigation.navigate('LoginScreen');
      // }
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Stack.Screen
          options={{
            title: 'Confirm Email',
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
          name='code'
          rules={{
            required: 'Auth Code is required',
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
                  placeholder={'code'}
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
          onPress={handleSubmit(onConfirmEmail)}
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
            {loading ? 'Loading...' : 'Confirm Email'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onResendCode}
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
            Resend Code
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default confirmEmail;

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
