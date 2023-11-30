import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Entypo } from '@expo/vector-icons';
import { useRouter, Link, Redirect, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../context/auth';
import { ChatRoom, GetUserQuery, ChatRoomUsers, User } from '@/src/API';
import { API, graphqlOperation } from 'aws-amplify';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '@/components/ChatListItem';
import { GraphQLSubscription } from '@aws-amplify/api';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Contacts from 'expo-contacts';
import { Contact } from 'expo-contacts';
import { useAppDispatch } from '@/Store';
import axios from 'axios';

import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';
import { setContacts, setRegdContacts } from '@/slices/navSlice';

import {
  GetUsersByNumbersQueryVariables,
  GetUsersByNumbersQuery,
} from '@/src/API';
import { getUsersByNumbers } from '@/components/ApolloQueries/Queries';
import { useQuery } from '@apollo/client';
import { contactsInput } from '@/src/API';

export default function Chats() {
  let initialProfileStatus;

  let syncedContactsResult: any;
  const router = useRouter();
  const [chatRoom, setChatRooms] = useState<Array<ChatRoomUsers | null> | null>(
    null
  );
  const [acceptUpdates, setAcceptUpdates] = useState(true);
  // const [loading, setLoading] = useState(false);
  const [chatsLoading, setChatsLoading] = useState<boolean>(false);
  const { authedUser } = useAuth();
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>(
    undefined
  );
  const [notification, setNotification] = useState<boolean>(false);

  const [syncedContacts, setSyncedContacts] = useState<boolean>(false);
  const [syncingContacts, setSyncingContacts] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<Array<Contact | null>>([]);
  const [currentBatch, setCurrentBatch] = useState<number>(0);
  const [contactsReady, setContactsReady] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [phoneContacts, setPhoneContacts] = useState<contactsInput[] | []>([]);

  // let uniqueContacts: string[]| null = []
  // let numbersToCheck: contactsInput[];

  const dispatch = useAppDispatch();

  // console.log('TOTAL BATCHES TO GO THRO: ', totalBatches);
  // console.log('CURRENT BATCH NO: ', currentBatch);

  // const getUser = async () => {
  //   initialProfileStatus = await AsyncStorage.getItem('USER_INITIAL_PROFILE');

  //   console.log(
  //     'USER PROFILE STATUS RETRIEVED FROM LOCAL STORE - CHATSSCREEN :',
  //     initialProfileStatus
  //   );

  //   syncedContactsResult = await AsyncStorage.getItem('SYNCED_CONTACTS');
  //   console.log('SYNCED CONTACTS FROM CHATSSCREEN: ', syncedContactsResult);
  // };
  // getUser();

  // Fetch Chatrooms

  // const fetchChatRooms = async () => {
  //   // setLoading(true);

  //   if (!authedUser) {
  //     setLoading(false);
  //     return;
  //   }

  //   const response = (await API.graphql(
  //     graphqlOperation(listChatRooms, {
  //       id: authedUser,
  //     })
  //   )) as { data: GetUserQuery };
  //   let rooms = response?.data?.getUser?.chatRooms?.items || [];
  //   console.log('Rooms: ', rooms);

  //   rooms = rooms.filter((room) => room !== null);
  //   const sortedRooms: Array<ChatRoomUsers | null> = rooms
  //     .filter((r): r is ChatRoomUsers => r !== null)
  //     .sort((r1, r2) => {
  //       if (r1 && r2) {
  //         const date1 = new Date(r1.chatRoom.updatedAt);
  //         const date2 = new Date(r2.chatRoom.updatedAt);
  //         // Compare dates in descending order
  //         return date2.getTime() - date1.getTime();
  //       }
  //       return 0;
  //     });

  //   console.log('Sorted Rooms: ', sortedRooms);
  //   setChatRooms(sortedRooms);

  //   // setLoading(false);
  // };

  // useEffect(() => {
  //   fetchChatRooms();

  // }, []);

  // useEffect(() => {
  // (async () => {
  //   const { data } = await Contacts.getContactsAsync({
  //     fields: [Contacts.Fields.PhoneNumbers],
  //   });
  //   if (data.length > 0) {
  //     const contacts = data;
  //     setNumbers(contacts);
  //     dispatch(setContacts({ digits: contacts }));
  //   }
  // })();
  // }, []);

  // useEffect(() => {
  //   if (numbers[30]?.phoneNumbers?.[0]?.number) {
  //     console.log('NUMBERS FROM INVOKING USEEFFECT: ', numbers[0], numbers[1]);
  //     syncContacts();
  //   }
  // }, [numbers, currentBatch]);

  const writeContactsToDynamoDB = async (mobileNumbers: string[]) => {
    try {
      const message = {
        data: {
          phoneNo: 254724716329,
          contacts: mobileNumbers,
        },
      };
      const API_URL =
        'https://4ln2o06waa.execute-api.eu-central-1.amazonaws.com/dev';
      const res = await fetch(`${API_URL}/contacts2Queue`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      const size = JSON.stringify(message);
      console.log('Est Size in bytes: ', size.length * 2);
      return { sucess: true };
    } catch (error) {
      console.error('Error invoking Lambda function: ', error);
      throw error;
    }
  };
  const syncContacts = async () => {
    try {
      setSyncingContacts(true);
      let existingContacts = new Set();
      let uniqueContacts: string[] | null = [];
      let numbersToCheck: contactsInput[] | null = [];

      // export type contactsInput = {
      //   number: string;
      // };

      for (let i = 0; i < numbers.length; i++) {
        let phoneNumber: string | undefined =
          numbers[i]?.phoneNumbers?.[0]?.number;
        if (phoneNumber) {
          const trimmedLength = phoneNumber.trim().length;
          // console.log('Trimmed Length: ', trimmedLength);
          if (trimmedLength >= 8) {
            if (!existingContacts.has(phoneNumber)) {
              existingContacts.add(phoneNumber);
              uniqueContacts.push(phoneNumber);
              // number = phoneNumber
              numbersToCheck[i] = {
                number: phoneNumber,
              };
            }
          }
        }
      }

      // console.log('NUMBERS CHECK', numbersToCheck);
      const { data, loading, error } = useQuery<
        GetUsersByNumbersQuery,
        GetUsersByNumbersQueryVariables
      >(getUsersByNumbers, {
        variables: {
          numbers: numbersToCheck,
        },
      });

      if (!loading) {
        setContactsReady(true);
        console.log('CONTACTS READY');
      }
      if (error) {
        setErrorMsg(error.message);
      }
      console.log('DATA: ', data?.getUsersByNumbers);

      // dispatch(setContacts({ digits: uniqueContacts }));
      // const response = await writeContactsToDynamoDB(uniqueContacts);
      // console.log('BATCHWRITE RESPONSE: ', response);
      setSyncingContacts(false);
      // setCurrentBatch((currentBatch) =>
      //   currentBatch < totalBatches - 1 ? currentBatch + 1 : currentBatch
      // );

      // setSyncedContacts((current) => !current);
      // console.log('SYNCED CONTACTS: ', syncedContacts);
    } catch (e) {
      console.log('Error: contacts syncing error', e);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setChatsLoading(true);

      (async () => {
        try {
          if (!authedUser) {
            setChatsLoading(false);
            return;
          }

          const response = (await API.graphql(
            graphqlOperation(listChatRooms, {
              id: authedUser,
            })
          )) as { data: GetUserQuery };
          let rooms = response?.data?.getUser?.chatRooms?.items || [];
          console.log('Rooms: ', rooms);

          rooms = rooms.filter((room) => room !== null);
          const sortedRooms: Array<ChatRoomUsers | null> = rooms
            .filter((r): r is ChatRoomUsers => r !== null)
            .sort((r1, r2) => {
              if (r1 && r2) {
                const date1 = new Date(r1.chatRoom.updatedAt);
                const date2 = new Date(r2.chatRoom.updatedAt);
                // Compare dates in descending order
                return date2.getTime() - date1.getTime();
              }
              return 0;
            });

          console.log('Sorted Rooms: ', sortedRooms);
          if (acceptUpdates) {
            setChatRooms(sortedRooms);
          }
        } catch (e) {
          console.log('Error refreshing chats list', e);
        }
      })();

      setChatsLoading(false);

      return () => {
        setAcceptUpdates(false);
      };
    }, [])
  );

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );
  // }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        // Alert.alert(
        //   'Permission Denied',
        //   'Mambozz needs permissions to send you notifications and function properly. Kindly grant permissions for notifications.'
        // );
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync({ projectId: '' }))
        .data;
      console.log('Token :', token);
    } else {
      alert('Must use physical device for Push Notifications');
      //  Alert.alert(
      //    'Device Check',
      //    'App is not running on physical device and therefore may not function properly. Run on physical device'
      //  );
    }
    return token;
  };

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.getPermissionsAsync();
  //     console.log('STATUS: ', status);
  //     // let numbersToCheck: contactsInput[] | [] = [];
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.PhoneNumbers],
  //       });
  //       const phBook = data;
  //       console.log('CURRENT BATCH NO - CHATSSCREEN: ', currentBatch);
  //       if (phBook.length > 0) {
  //         let existingContacts = new Set();
  //         let numbersToCheck: contactsInput[] | null = [];
  //         // let batchSize = 500;
  //         // let totalBatches = Math.ceil(phBook?.length / batchSize);
  //         // let startIndex = currentBatch * batchSize;
  //         // let endIndex = Math.min(startIndex + batchSize, phBook.length);
  //         for (let i = 0; i < phBook.length; i++) {
  //           // for (let i = startIndex; i < endIndex; i++) {
  //           let phoneNumber: string | undefined =
  //             phBook[i]?.phoneNumbers?.[0]?.number;
  //           if (phoneNumber) {
  //             const trimmedNumber = phoneNumber.trim();
  //             const cleanNumber = trimmedNumber.replace(/[^\d]/g, '');
  //             // console.log('CLEANED NUMBER: ', cleanNumber);
  //             const result = cleanNumber.startsWith('0');
  //             if (result) {
  //               const editNumber = cleanNumber.slice(1);
  //               const intlformat = `+254${editNumber} `;
  //               // console.log('FORMATTED NUMBER: ', intlformat);
  //               if (intlformat.length >= 8) {
  //                 if (!existingContacts.has(intlformat)) {
  //                   existingContacts.add(intlformat);
  //                   // uniqueContacts.push(phoneNumber);
  //                   // number = phoneNumber
  //                   // numbersToCheck[i] = {
  //                   //   number: phoneNumber,
  //                   // };
  //                   let contacts = {
  //                     number: intlformat,
  //                   };
  //                   numbersToCheck.push(contacts);
  //                   // console.log(
  //                   //   'NUMBERS CHECK WITHIN FOR LOOP:',
  //                   //   numbersToCheck[i]
  //                   // );
  //                 }
  //               }
  //             }
  //           }
  //           // setCurrentBatch((currentBatch) =>
  //           //   currentBatch < totalBatches - 1 ? currentBatch + 1 : currentBatch
  //           // );
  //         }
  //         console.log('NUMBERS TO CHECK : ', numbersToCheck[5]);
  //         setPhoneContacts(numbersToCheck);
  //       }
  //     }
  //   })();
  // }, [currentBatch]);

  // const { data, loading, error } = useQuery<
  //   GetUsersByNumbersQuery,
  //   GetUsersByNumbersQueryVariables
  // >(getUsersByNumbers, {
  //   variables: {
  //     // numbers: phoneContacts,
  //     numbers: [
  //       {
  //         number: '+254724716329',
  //       },
  //       {
  //         number: '+254720009131',
  //       },
  //     ],
  //   },
  // });

  // if (loading) {
  //   return (
  //     <>
  //       <ActivityIndicator />
  //       <Text>Kindly wait as we set up your account</Text>
  //     </>
  //   );
  // }
  // if (error) {
  //   // <Text>{error.message}</Text>;
  //   console.log('APOLLO CLIENT ERROR: ', error.message);
  // }

  // console.log('DATA FROM APOLLO CLIENT: ', data?.getUsersByNumbers);
  // dispatch(setRegdContacts({ users: data?.getUsersByNumbers }));
  if (!authedUser) {
    // <Redirect href={'/login'} />;
    return <ActivityIndicator />;
  }
  // if (!contactsReady) {
  //   return <ActivityIndicator />;
  // }
  if (chatsLoading) {
    return <ActivityIndicator />;
  }
  // if (initialProfileStatus === 'notSet') {
  //   console.log('Redirecting to profile from homepage');
  //   <Redirect href={'/profile'} />;
  // }
  // if (!syncedContacts) {
  // if (syncingContacts) {
  //   console.log('Syncing contacts advise user to wait');
  //   return (
  //     <>
  //       <ActivityIndicator />
  //       <Text>Kindly wait as we set up your account</Text>
  //     </>
  //   );
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={chatRoom}
        renderItem={({ item }) => <ChatListItem chat={item?.chatRoom} />}
        style={{ backgroundColor: 'white' }}
        refreshing={chatsLoading}
        // onRefresh={fetchChatRooms}
      />
      <View>
        <Link
          href='/contacts'
          asChild
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
            shadowRadius: 10,
            shadowColor: '#FFCB45',
            shadowOpacity: 0.3,
            backgroundColor: '#FFCB45',
            borderRadius: 30,
          }}
        >
          <Pressable>
            {({ pressed }) => (
              <Entypo
                onPress={() => router.push('/contacts')}
                name='new-message'
                size={22}
                color={'black'}
              />
            )}
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Chats</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor='#eee'
    //     darkColor='rgba(255,255,255,0.1)'
    //   />
    //   <EditScreenInfo path='app/(tabs)/index.js' />
    // </View>
  );
}

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatRooms {
        items {
          chatRoom {
            id
            name
            image
            updatedAt
            users {
              items {
                user {
                  id
                  username
                  chatStatus
                  chatImage
                  lastOnlineAt
                }
              }
            }
            lastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;

export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      chatRooms {
        items {
          chatRoom {
            id
            name
            image
            users {
              items {
                user {
                  id
                  username
                }
              }
            }
            newMessages
            lastMessage {
              id
              createdAt
              text
              userId
              chatRoomId
              status
              replyToMessageID
              forUserId
              updatedAt
            }
            updatedAt
            chatRoomLastMessageId
          }
        }
        nextToken
      }
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
