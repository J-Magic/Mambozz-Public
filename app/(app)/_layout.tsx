import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  SplashScreen,
  Stack,
  useRootNavigation,
  useRootNavigationState,
  Slot,
  useRouter,
  Redirect,
  useSegments,
} from 'expo-router';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useColorScheme, ActivityIndicator } from 'react-native';
import { AuthProvider, useAuth } from '../../context/auth';

import { Provider } from 'react-redux';
import { store } from '@/Store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { useAppSelector } from '@/Store';
import config from '@/src/aws-exports';
import { Amplify } from 'aws-amplify';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as Contacts from 'expo-contacts';
import { Contact } from 'expo-contacts';
import * as TaskManager from 'expo-task-manager';
import Client from '../apollo/Client';

import {
  GetUsersByNumbersQueryVariables,
  GetUsersByNumbersQuery,
} from '@/src/API';
import { getUsersByNumbers } from '@/components/ApolloQueries/Queries';
import { useQuery } from '@apollo/client';
import { contactsInput } from '@/src/API';

// Amplify.configure({
//   ...config,
//   Analytics: {
//     disabled: true,
//   },
// });

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [ session, isLoading ] = useSession();
  const { isLoading, session, authedUser } = useAuth();
  // const [loaded, error] = useFonts({
  //   SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  //   TwemojiMozilla: require('../../assets/fonts/TwemojiMozilla.ttf'),
  //   ...FontAwesome.font,
  // });
  // const [phonebook, setPhoneBook] = useState<Contact[]>();
  // const [phonebook, setPhoneBook] = useState<Array<Contact | null>>([]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) {
  //     console.log('Error from Error boundary');
  //     throw error;
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!rootNavigationState?.key) return null;

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.PhoneNumbers],
  //       });
  //       // if (data.length > 0) {
  //       //   // const contact = data[0];
  //       //   // console.log('CONTACT :', contact);
  //       //   setPhoneBook(data);
  //       //   let existingContacts = new Set();
  //       //   // let uniqueContacts: string[] | null = [];
  //       //   let numbersToCheck: contactsInput[] | null = [];
  //       //   for (let i = 0; i < data.length; i++) {
  //       //     let phoneNumber: string | undefined =
  //       //       data[i]?.phoneNumbers?.[0]?.number;
  //       //     if (phoneNumber) {
  //       //       const trimmedLength = phoneNumber.trim().length;
  //       //       // console.log('Trimmed Length: ', trimmedLength);
  //       //       if (trimmedLength >= 8) {
  //       //         if (!existingContacts.has(phoneNumber)) {
  //       //           existingContacts.add(phoneNumber);
  //       //           // uniqueContacts.push(phoneNumber);
  //       //           // number = phoneNumber
  //       //           numbersToCheck[i] = {
  //       //             number: phoneNumber,
  //       //           };
  //       //         }
  //       //       }
  //       //     }
  //       //   }
  //       //   dispatch(setContacts({ digits: numbersToCheck }));
  //       //   // const contacts = data;
  //       //   // const contact : string = contacts[2001].phoneNumbers

  //       //   // console.log('1ST CONTACT: ', contacts[500]);
  //       //   // console.log(
  //       //   //   'CONTACTS NOW: ',
  //       //   //   contacts[500].phoneNumbers?.[0]?.number
  //       //   // );
  //       // }
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const authUser = await Auth.currentAuthenticatedUser({
  //         bypassCache: true,
  //       });
  //       if (authUser) {
  //         console.log('Current Authed User: ', authUser);
  //         setAuthUser(authUser.attributes.sub);
  //         setCognitoUser(authUser);
  //         setAuthId(authUser.attributes.sub);

  //         // dispatch(setLoggedIn(true));
  //       } else {
  //         console.log('User session expired. User redirected to login');
  //         <Redirect href={'/login'} />;
  //       }
  //     } catch (error) {
  //       console.log('No Authed User Error: ', error);

  //       // setAuthUser(null);
  //     }
  //   })();
  // }, []);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log('SESSION: ', session);
  console.log('AUTHED USER: ', authedUser);

  // if (!session || session !== authedUser) {
  if (!session) {
    return <Redirect href={'/(auth)/login'} />;
  }

  // if (storedUserStatus === 'confirmingEmail' ) {
  //   console.log('pushing to confirming email');
  //   router.replace('/confirmEmail');
  // }
  // if (storedUserStatus === 'userConfirmed' ) {
  //   console.log('pushing to login');
  //   router.replace('/login');
  // }
  //   if (
  //     initialProfileStatus === 'notSet' &&
  //     storedUserStatus === 'userLoggedIn' &&
  //     inAuthGroup
  //   ) {
  //     console.log('pushing to profile');
  //     router.replace('/profile');
  //   }
  //  }

  // if (!loaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // export default function RootLayout() {
  // const rootNavigationState = useRootNavigationState();

  const colorScheme = useColorScheme();
  // const { authedUser } = useAuth();
  // const router = useRouter();

  // const phoneNumbers = useAppSelector((state) => state.nav.contacts);

  // console.log('Root Navigation State: ', rootNavigationState);
  // if (!rootNavigationState?.key) return null;

  // if (!loggedIn) return null;
  // if (!user) return null;
  // if (!authedUser) {
  //   router.push('/context/auth');
  // }
  // if (!authedUser) return <ActivityIndicator />;
  // if (!authedUser) {
  //   return <Redirect href={'/login'} />;
  // }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />

        <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
