import { useEffect, useState } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { AuthProvider } from '../context/auth';
import { Provider } from 'react-redux';
import { store } from '@/Store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Client from './apollo/Client';
import * as Contacts from 'expo-contacts';
import { Contact } from 'expo-contacts';
import { Amplify } from 'aws-amplify';
import config from '@/src/aws-exports';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

if (process.env.NODE_ENV !== 'production') {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/(auth)/login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    TwemojiMozilla: require('../assets/fonts/TwemojiMozilla.ttf'),
    ...FontAwesome.font,
  });
  //  Expo Router uses Error Boundaries to catch errors in the navigation tree.

  useEffect(() => {
    if (error) {
      console.log('Error from Error boundary');
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          const contact = data[0];
          console.log('CONTACT PERMISSION GRANTED - APP/_LAYOUT:', contact);
        }

        // if (data.length > 0) {
        //   // const contact = data[0];
        //   // console.log('CONTACT :', contact);
        //   setPhoneBook(data);
        //   let existingContacts = new Set();
        //   // let uniqueContacts: string[] | null = [];
        //   let numbersToCheck: contactsInput[] | null = [];
        //   for (let i = 0; i < data.length; i++) {
        //     let phoneNumber: string | undefined =
        //       data[i]?.phoneNumbers?.[0]?.number;
        //     if (phoneNumber) {
        //       const trimmedLength = phoneNumber.trim().length;
        //       // console.log('Trimmed Length: ', trimmedLength);
        //       if (trimmedLength >= 8) {
        //         if (!existingContacts.has(phoneNumber)) {
        //           existingContacts.add(phoneNumber);
        //           // uniqueContacts.push(phoneNumber);
        //           // number = phoneNumber
        //           numbersToCheck[i] = {
        //             number: phoneNumber,
        //           };
        //         }
        //       }
        //     }
        //   }
        //   dispatch(setContacts({ digits: numbersToCheck }));
        //   // const contacts = data;
        //   // const contact : string = contacts[2001].phoneNumbers

        //   // console.log('1ST CONTACT: ', contacts[500]);
        //   // console.log(
        //   //   'CONTACTS NOW: ',
        //   //   contacts[500].phoneNumbers?.[0]?.number
        //   // );
        // }
      }
    })();
  }, []);

  if (!loaded) {
    return null;
  }
  // Set up the auth context and render our layout inside of it.
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <ActionSheetProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <Client>
                  <Slot />
                </Client>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ActionSheetProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}
