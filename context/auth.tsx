import {
  useRootNavigation,
  useRouter,
  useSegments,
  Redirect,
} from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { useStorageState, setStorageItemAsync } from './useStorageState';
import { Amplify, Auth } from 'aws-amplify';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch, useAppSelector } from '@/Store';
import { setConfirmingEmail, setEmail, setUserId } from '@/slices/navSlice';
import { CognitoUser } from 'amazon-cognito-identity-js';

// type ID = string
type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

interface AuthContextValue {
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (
    email: string,
    password: string,
    phone_number: string
  ) => Promise<any>;
  confirmMail: (email: string, code: string) => Promise<any>;
  resendCode: (userEmail: string) => Promise<any>;
  signOut: () => Promise<any>;
  authedUser: string | null;
  cognitoUser: CognitoUser | undefined;
  authId: string;
  session: string | null;
  isLoading: boolean;
}
const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined
);
export const userSessionCache = {
  async getUser(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (e) {
      return null;
    }
  },
  async saveUser(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (e) {
      return;
    }
  },
};

// This hook can be used to access the user info.

// export function useSession() {
//   const value = React.useContext(AuthContext);
//   if (!value) {
//     throw new Error('useSession must be wrapped in a <AuthProvider/>');
//   }
//   return value;
// }
export function AuthProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  console.log('Session from auth: ', session);
  const [authedUser, setAuthUser] = useState<string | null>(null);
  const [authId, setAuthId] = useState<string>('');
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();
  let storedUserStatus: string | null;
  let initialProfileStatus: string | null;

  // useEffect(() => {
  //   const removeProfile = async () => {
  //     await SecureStore.deleteItemAsync('USER_INITIAL_PROFILE');
  //     await SecureStore.deleteItemAsync('USER_STATUS');
  //     await SecureStore.deleteItemAsync('JWT_TOKEN');
  //   };
  //   removeProfile();
  // }, []);
  // This hook will protect the route access based on user authentication
  // function protectedRoute(user: any) {
  // const segments = useSegments();
  // const router = useRouter();

  // useEffect(() => {
  //   console.log('SET USER FUNCTION ABOUT TO RUN');
  //   const setUser = async () => {
  //     await AsyncStorage.setItem('USER_INITIAL_PROFILE', 'notSet');
  //   };
  //   setUser();
  // }, []);
  // checking that navigation is ready
  // const [isNavigationReady, setNavigationReady] = useState(false);
  // const rootNavigation = useRootNavigation();

  // useEffect(() => {
  //   const unsubscribe = rootNavigation?.addListener('state', (event) => {
  //     setNavigationReady(true);
  //   });
  //   return function cleanup() {
  //     if (unsubscribe) {
  //       unsubscribe();
  //     }
  //   };
  // }, [rootNavigation]);

  // useEffect(() => {
  //   if (!isNavigationReady) {
  //     return;
  //   }
  //   const getUser = async () => {
  //     storedUserStatus = await AsyncStorage.getItem('USER_STATUS');
  //     console.log('USER STATUS RETRIEVED FROM LOCAL STORE :', storedUserStatus);
  //     initialProfileStatus = await AsyncStorage.getItem('USER_INITIAL_PROFILE');
  //     console.log(
  //       'USER PROFILE STATUS RETRIEVED FROM LOCAL STORE :',
  //       initialProfileStatus
  //     );
  //   };
  //   getUser();

  //   const inAuthGroup = segments[0] === '(auth)';
  //   // if the user is not signed in and the initial segment is not anything
  //   //in the auth group
  //   if (storedUserStatus === 'userLoggedOut') {
  //     console.log('Pushing returning user to login screen');
  //     router.replace('/login');
  //   }
  //   // if (!user && !inAuthGroup) {
  //   if (!authedUser && !inAuthGroup) {
  //     console.log('Pushed to signUp');
  //     router.replace('/login');
  //   }
  //   if (storedUserStatus === 'confirmingEmail' && inAuthGroup) {
  //     console.log('pushing to confirming email');
  //     router.replace('/confirmEmail');
  //   }
  //   if (storedUserStatus === 'userConfirmed' && inAuthGroup) {
  //     console.log('pushing to login');
  //     router.replace('/login');
  //   }
  //   if (
  //     initialProfileStatus === 'notSet' &&
  //     storedUserStatus === 'userLoggedIn' &&
  //     inAuthGroup
  //   ) {
  //     console.log('pushing to profile');
  //     router.replace('/profile');
  //   }
  //   if (storedUserStatus === 'userLoggedOut' && inAuthGroup) {
  //     console.log('pushing to login');
  //     router.replace('/login');
  //   } else if (authedUser && inAuthGroup) {
  //     console.log('Pushed to home page');
  //     router.replace('/');
  //   }
  // }, [authedUser, segments, isNavigationReady]);

  useEffect(() => {
    (async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        if (authUser.attributes.sub) {
          console.log('Current Authed User from Context Auth: ', authUser);
          setAuthUser(authUser.attributes.sub);
          setCognitoUser(authUser);
          setAuthId(authUser.attributes.sub);

          // dispatch(setLoggedIn(true));
        }
        // else {
        //   console.log('User session expired. User redirected to login');
        //   <Redirect href={'/login'} />;
        // }
      } catch (error) {
        console.log('No Authed User Error: ', error);
        setAuthUser(null);
      }
    })();
  }, []);

  /**
   *
   * @param email
   * @param password
   * @returns
   */

  const logIn = async (email: string, password: string): Promise<any> => {
    try {
      console.log('User login function from Auth');
      const response = await Auth.signIn(email, password);
      if (response) {
        console.log('Router replace to Profile Screen');
        console.log('Login response from Auth: ', response);
        await userSessionCache.saveUser('USER_STATUS', 'userLoggedIn');
        // await AsyncStorage.setItem('USER_STATUS', 'userLoggedIn');
        setSession(response?.attributes?.sub);
        setAuthUser(response?.attributes?.sub);
        setCognitoUser(response);
        setAuthId(response.attributes.sub);
        dispatch(setUserId({ userId: response.attributes.sub }));
      }
      return response;
    } catch (error) {
      setAuthUser(null);
      console.log('No User Error from login fn in Auth : ', error);
      return { error: error as Error };
    }
  };

  /**
   *
   * @returns
   */

  const logOut = async (): Promise<any> => {
    try {
      console.log('User Log out function from Auth');
      await userSessionCache.saveUser('USER_STATUS', 'userLoggedOut');
      // await AsyncStorage.setItem('USER_STATUS', 'userLoggedOut');
      const response = await Auth.signOut();
      if (response) {
        console.log('Router replace to login screen');
        console.log('Sign out response from Auth :', response);
        // setStorageItemAsync('JWT_TOKEN', null);
        setSession(null);
        setAuthUser(null);
      }
      return response;
    } catch (error) {
      return { error: error as Error };
    } finally {
      setAuthUser(null);
    }
  };

  /**
   *
   * @param userEmail
   * @returns
   */
  const codeResend = async (userEmail: string): Promise<any> => {
    try {
      console.log('Sending Request to Resend Code from Auth');
      const response = await Auth.resendSignUp(userEmail);
      return response;
    } catch (error) {
      return { error: error as Error };
    }
  };

  /**
   *
   * @param email
   * @param code
   */
  const mailConfirmation = async (
    email: string,
    code: string
  ): Promise<any> => {
    try {
      console.log('Mail Confirmation function from Auth: ', email);
      const response = await Auth.confirmSignUp(email, code);

      if (response) {
        console.log('Router replace to Login Screen');
        console.log('Confirm Email Response from Auth :', response);
        // console.log('User ID: ', response.attributes.sub);
        // setUserStatus('userConfirmed');
        // await AsyncStorage.setItem('USER_STATUS', 'userConfirmed');

        await userSessionCache.saveUser('USER_STATUS', 'userConfirmed');
        await userSessionCache.saveUser('USER_INITIAL_PROFILE', 'notSet');
        // await AsyncStorage.multiSet([
        //   ['USER_STATUS', 'userConfirmed'],
        //   ['USER_INITIAL_PROFILE', 'notSet'],
        // ]);
      }
      return response;
    } catch (error) {
      setAuthUser(null);
      return { error: error as Error };
    }
  };

  /**
   * @param email
   * @param password
   * @param phone_number
   * @returns
   */
  const createAccount = async (
    email: string,
    password: string,
    phone_number: string
  ): Promise<any> => {
    try {
      console.log('Create Account function from Auth: ', email);

      // create account
      const response = await Auth.signUp({
        username: email,
        password,
        attributes: {
          phone_number,
        },
      });

      if (response) {
        // navigation.navigate('ConfirmEmail', { email });
        // router.push('/confirmEmail');
        dispatch(setEmail({ email }));
        // setUserStatus('confirmingEmail');
        // await AsyncStorage.setItem('USER_STATUS', 'confirmingEmail');
        await userSessionCache.saveUser('USER_STATUS', 'confirmingEmail');

        // await AsyncStorage.multiSet([
        //   ['USER_STATUS', 'confirmingEmail'],
        //   ['SYNCED_CONTACTS', 'false'],
        // ]);

        console.log('Router replace to Confirm Email Screen');
        console.log('Response :', response);
      }
      return response;
    } catch (error) {
      setAuthUser(null);
      return { error: error as Error };
    }
  };
  // protectedRoute(authedUser);

  return (
    <AuthContext.Provider
      value={{
        signIn: logIn,
        signOut: logOut,
        signUp: createAccount,
        confirmMail: mailConfirmation,
        resendCode: codeResend,
        authedUser,
        cognitoUser,
        authId,
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// This hook can be used to access the user info.

// export function useAuth() {
//   return React.useContext(AuthContext);
// }

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used with an AuthContext Provider');
  }

  return authContext;
};
