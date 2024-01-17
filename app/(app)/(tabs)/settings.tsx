import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from 'react-native';
import React from 'react';
import { router, Link } from 'expo-router';
import { useAuth } from '../../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DeleteUserMutation, DeleteUserMutationVariables } from '@/src/API';
import { deleteUser } from '@/components/ApolloQueries/Mutations';
import { useMutation } from '@apollo/client';
import { Auth } from 'aws-amplify';

const settings = () => {
  // const isPresented = router.canGoBack();
  const colorScheme = useColorScheme();
  const { signOut, authId, cognitoUser } = useAuth();
  const [doDeleteUser, { loading: deleteUserLoading, error: deleteUserError }] =
    useMutation<DeleteUserMutation, DeleteUserMutationVariables>(deleteUser);
  // let removedUser: any;

  // const removeUser = async () => {
  //   removedUser = await AsyncStorage.removeItem('USER_STATUS');
  // };

  const logOut = async () => {
    await signOut();
    router.push('/login');
  };

  const profile = () => {
    router.push('/(app)/profile');
  };

  const confirmDelete = () => {
    Alert.alert('Confirm Delete', 'Deleting your account is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, Delete',
        style: 'destructive',
        onPress: startDelete,
      },
    ]);
  };

  const startDelete = async () => {
    if (!authId) {
      return;
    }
    // Delete from DB
    await doDeleteUser({
      variables: {
        input: {
          id: authId,
        },
      },
    });

    // Delete from Cognito
    cognitoUser?.deleteUser((err) => {
      if (err) {
        console.log('Delete Cognito User Error: ', err);
      }
      Auth.signOut();
      router.push('/login');
    });
  };

  if (deleteUserLoading) {
  }
  if (deleteUserError) {
    console.log('Delete Error: ', deleteUserError.message);
  }
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

      <Link href='/(app)/profile' asChild>
        <TouchableOpacity
          onPress={profile}
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
            Edit Profile
          </Text>
        </TouchableOpacity>
      </Link>
      {/* {!isPresented && <Link href='../'>Dismiss</Link>} */}

      <Link href='/login' asChild>
        <TouchableOpacity
          onPress={confirmDelete}
          style={{
            width: 120,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            backgroundColor: 'red',
            borderColor: colorScheme === 'light' ? '#000' : '#FFCB45',
          }}
        >
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#FFCB45',
              fontSize: 16,
            }}
          >
            {deleteUserLoading ? 'Deleting...' : 'DELETE USER'}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
