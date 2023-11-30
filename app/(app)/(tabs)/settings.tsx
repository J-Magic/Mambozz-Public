import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { router, Link } from 'expo-router';
import { useAuth } from '../../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const settings = () => {
  // const isPresented = router.canGoBack();
  const colorScheme = useColorScheme();
  const { signOut } = useAuth();
  // let removedUser: any;

  // const removeUser = async () => {
  //   removedUser = await AsyncStorage.removeItem('USER_STATUS');
  // };

  const logOut = async () => {
    await signOut();
    router.push('/login');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href='/login' asChild>
        <TouchableOpacity
          onPress={logOut}
          style={{
            width: 90,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            backgroundColor: '#000',
            borderColor: colorScheme === 'light' ? '#000' : '#FFCB45',
          }}
        >
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#FFCB45',
              fontSize: 16,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </Link>
      {/* {!isPresented && <Link href='../'>Dismiss</Link>} */}
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
