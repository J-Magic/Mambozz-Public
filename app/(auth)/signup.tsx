import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  useColorScheme,
} from 'react-native';
import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';

import { Stack, useRouter } from 'expo-router';
import { useAuth } from '@/context/auth';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import { setCodelessNumber } from '@/slices/navSlice';
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';
import { useAppDispatch } from '@/Store';

const Email_Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PhoneNo_Regex =
  // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  /^\+(?:[0-9] ?){6,14}[0-9]$/;

function validatePhoneNo(phoneNo: string, country: CountryCode) {
  try {
    const phoneNoObj = parsePhoneNumberFromString(phoneNo, country);
    if (phoneNoObj && phoneNoObj.isValid()) {
      return true;
    }
  } catch (error) {
    console.log('International Phonenumber format error: ', error);
  }
  return false;
}

const SignUp = () => {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const colorScheme = useColorScheme();
  const { signUp } = useAuth();

  type FormData = {
    username: string;
    password: string;
    repeat_password: string;
    email: string;
    phone_number: string;
    fullname: string;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({});

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }
  const pwd = watch('password');

  console.log(errors);

  const onSignUp = async (data: FormData) => {
    const { username, password, email, phone_number, fullname } = data;
    console.log('PHONE NUMBER FROM SIGNUP:', phone_number);
    const phoneNoValidityResult = validatePhoneNo(
      `${selectedCountry?.callingCode}${phone_number}`,
      selectedCountry?.callingCode as CountryCode
    );
    console.log('Phone number validity: ', phoneNoValidityResult);
    console.log(`Phone No: ${selectedCountry?.callingCode}${phone_number}`);
    if (phoneNoValidityResult) {
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        const response = await signUp(
          email,
          password,
          `${selectedCountry?.callingCode}${phone_number}`
        );
        dispatch(setCodelessNumber({ number: phone_number }));
        if (response) {
          console.log('Response from Sign Up :', response);
          router.replace('/(auth)/confirmEmail');
        }
        // const response = await Auth.signUp({
        //   username: email,
        //   password,
        //   attributes: {
        //     phone_number,
        //   },
        // });
        // console.log(response);
        // if (response) {
        //   // navigation.navigate('ConfirmEmail', { email });
        //   router.push({
        //     pathname: '/confirmEmail',
        //   });
        // }
      } catch (e: any) {
        Alert.alert('Oops', e.message);
      }
      setLoading(false);
    } else {
      Alert.alert('Error', 'Enter a valid phone number');
      console.warn('Enter valid phone number');
    }
  };

  const toLogin = () => {
    // navigation.navigate('LoginScreen');
    router.push('/(auth)/login');
  };
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Sign Up',
          headerTintColor: colorScheme === 'light' ? '#000' : '#FFCB45',
        }}
      />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Controller
            control={control}
            name='fullname'
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should at least 4 characters long',
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
                    {
                      borderColor: error ? 'red' : 'black',
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={'Fullname'}
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
            name='username'
            rules={{
              required: 'username is required',
              minLength: {
                value: 3,
                message: 'username should at least 3 characters long',
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
                    {
                      borderColor: error ? 'red' : 'black',
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={'Username'}
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
                    {
                      borderColor: error ? 'red' : 'black',
                      paddingHorizontal: 10,
                    },
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
                    {
                      borderColor: error ? 'red' : 'black',
                      paddingHorizontal: 10,
                    },
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
          <Controller
            control={control}
            name='repeat_password'
            rules={{
              required: 'Password is required',
              validate: (value) =>
                value === pwd || 'Passwords do not match. Try again ',
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
                    {
                      borderColor: error ? 'red' : 'black',
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={'Repeat Password'}
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
          <Controller
            control={control}
            name='phone_number'
            rules={{
              required: 'Phone Number is required',

              // pattern: {
              //   value: PhoneNo_Regex,
              //   message: 'Enter a valid phone number',
              // },
              // minLength: {
              //   value: 13,
              //   message: 'Phone number should have a minumum of 12 characters',
              // },
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
                  {/* <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={'Phone number with format: +254724103748'}
                    style={styles.input}
                  /> */}

                  <PhoneInput
                    // style={{ marginRight: 10 }}
                    defaultValue='+254724716329.'
                    customMask={['############']}
                    value={value}
                    onChangePhoneNumber={onChange}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={handleSelectedCountry}
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
            onPress={handleSubmit(onSignUp)}
            style={[
              styles.formButton,
              {
                // backgroundColor: Colors[colorScheme ? 'light' : 'dark'].tint,
                // borderColor: Colors[colorScheme ? 'light' : 'dark'].tint,
                // backgroundColor: colorScheme === 'light' ? '#000' : '#FFCB45',
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
              {loading ? 'Loading...' : 'Sign Up'}
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
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={toLogin}
            style={[
              styles.formButton,
              {
                // backgroundColor: Colors[colorScheme ? 'light' : 'dark'].tint,
                // borderColor: Colors[colorScheme ? 'light' : 'dark'].tint,
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
              Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 49,
    width: '90%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    // paddingHorizontal: 10,
    marginVertical: 8,
  },

  input: {
    height: 50,
    justifyContent: 'center',
  },
  formButton: {
    // backgroundColor: 'rgba(255, 199, 0, 0.25)',
    // backgroundColor: Colors[colorScheme ? 'light' : 'dark'].tint,
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
