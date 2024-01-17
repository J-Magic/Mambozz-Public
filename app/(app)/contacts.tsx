import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import ContactListItem from '../../components/ContactListItem';

import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '../../context/auth';
import * as Contacts from 'expo-contacts';
import {
  CreateChatRoomInput,
  CreateChatRoomMutation,
  CreateChatRoomMutationVariables,
  CreateChatRoomUsersInput,
  CreateChatRoomUsersMutation,
  CreateChatRoomUsersMutationVariables,
  // User,
  GetUsersByNumbersQueryVariables,
  GetUsersByNumbersQuery,
  GetUserQueryVariables,
  GetUserQuery,
} from '@/src/API';
import {
  getUsersByNumbers,
  listChatRooms,
} from '@/components/ApolloQueries/Queries';
import {
  createChatRoom,
  createChatRoomUsers,
} from '@/components/ApolloQueries/Mutations';
import { useQuery, useMutation } from '@apollo/client';
import { contactsInput } from '@/src/API';
import { User } from '@/components/ApolloQueries/Types';

const ContactsScreen = () => {
  const { authedUser, authId } = useAuth();
  const [phoneContacts, setPhoneContacts] = useState<contactsInput[] | []>([]);
  const [currentBatch, setCurrentBatch] = useState<number>(0);
  const { data, loading, error } = useQuery<
    GetUsersByNumbersQuery,
    GetUsersByNumbersQueryVariables
  >(getUsersByNumbers, {
    variables: {
      // numbers: phoneContacts,
      numbers: [
        {
          number: '+254724716329',
        },
        {
          number: '+254720009131',
        },
      ],
    },
  });
  const {
    data: chatRoomsListData,
    loading: chatRoomsListLoading,
    error: chatRoomsListError,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(listChatRooms, {
    variables: {
      id: authId,
    },
  });
  const [
    doCreateChatRoomUsers,
    {
      data: createChatroomUserData,
      loading: createChatroomUserLoading,
      error: createChatroomUserError,
    },
  ] = useMutation<
    CreateChatRoomUsersMutation,
    CreateChatRoomUsersMutationVariables
  >(createChatRoomUsers);

  const [
    doCreateChatRoom,
    {
      data: createChatRoomData,
      loading: createChatRoomLoading,
      error: createChatRoomError,
    },
  ] = useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(
    createChatRoom
  );

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.getPermissionsAsync();
      console.log('STATUS: ', status);
      // let numbersToCheck: contactsInput[] | [] = [];
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        const phBook = data;
        console.log('CURRENT BATCH NO - CHATSSCREEN: ', currentBatch);
        if (phBook.length > 0) {
          let existingContacts = new Set();
          let numbersToCheck: contactsInput[] | null = [];
          // let batchSize = 500;
          // let totalBatches = Math.ceil(phBook?.length / batchSize);
          // let startIndex = currentBatch * batchSize;
          // let endIndex = Math.min(startIndex + batchSize, phBook.length);
          for (let i = 0; i < phBook.length; i++) {
            // for (let i = startIndex; i < endIndex; i++) {
            let phoneNumber: string | undefined =
              phBook[i]?.phoneNumbers?.[0]?.number;
            if (phoneNumber) {
              const trimmedNumber = phoneNumber.trim();
              const cleanNumber = trimmedNumber.replace(/[^\d]/g, '');
              // console.log('CLEANED NUMBER: ', cleanNumber);
              const result = cleanNumber.startsWith('0');
              if (result) {
                const editNumber = cleanNumber.slice(1);
                const intlformat = `+254${editNumber} `;
                // console.log('FORMATTED NUMBER: ', intlformat);
                if (intlformat.length >= 8) {
                  if (!existingContacts.has(intlformat)) {
                    existingContacts.add(intlformat);
                    // uniqueContacts.push(phoneNumber);
                    // number = phoneNumber
                    // numbersToCheck[i] = {
                    //   number: phoneNumber,
                    // };
                    let contacts = {
                      number: intlformat,
                    };
                    numbersToCheck.push(contacts);
                    // console.log(
                    //   'NUMBERS CHECK WITHIN FOR LOOP:',
                    //   numbersToCheck[i]
                    // );
                  }
                }
              }
            }
            // setCurrentBatch((currentBatch) =>
            //   currentBatch < totalBatches - 1 ? currentBatch + 1 : currentBatch
            // );
          }
          console.log('NUMBERS TO CHECK : ', numbersToCheck[5]);
          setPhoneContacts(numbersToCheck);
        }
      }
    })();
    // }, [currentBatch]);
  }, []);

  if (loading || chatRoomsListLoading) {
    return (
      <>
        <ActivityIndicator />
        <Text>Kindly wait as we set up your account</Text>
      </>
    );
  }
  if (createChatRoomLoading || createChatroomUserLoading) {
    return (
      <>
        <ActivityIndicator />
        <Text>Creating New Chat...</Text>
      </>
    );
  }
  if (
    error ||
    chatRoomsListError ||
    createChatroomUserError ||
    createChatRoomError
  ) {
    console.log(
      'APOLLO CLIENT ERROR: ',
      error?.message ||
        chatRoomsListError?.message ||
        createChatroomUserError?.message ||
        createChatRoomError?.message
    );
  }

  const regdContacts = data?.getUsersByNumbers || [];

  const createPrivateChatRoom = async (user: User | null) => {
    //   // Check if clicked user is me (Using master user/Authenticated user)
    console.log('Clicked User: ', user?.username);
    if (user !== null) {
      if (user.id === authedUser) {
        console.warn(
          'Click different user other than yourself to send messages'
        );
        return;
      }
      const chatRooms = chatRoomsListData?.getUser?.chatRooms?.items || [];
      console.log('EXISTING CHATROOMS: ', chatRooms);

      let existingChatRoom = chatRooms.find((chatRoomItem) => {
        return (
          chatRoomItem?.chatRoom?.users?.items.length === 2 &&
          chatRoomItem.chatRoom.users.items.some(
            (userItem) => userItem?.user.id === user.id
          )
        );
      });

      if (existingChatRoom !== null && existingChatRoom !== undefined) {
        router.push({
          pathname: `/(app)/${user.username}`,
          params: {
            chat: user.username,
            id: existingChatRoom?.chatRoom.id,
            userId: user.id,
            name: user.username,
          },
        });
        return;
      }

      // Create a new Chatroom
      let input: CreateChatRoomInput = {
        newMessages: 0,
      };

      let newChatRoomData = await doCreateChatRoom({
        variables: { input },
      });

      console.log('Newly Created Chatroom :', newChatRoomData);
      if (!newChatRoomData.data?.createChatRoom) {
        console.warn('Error creating the chat error, try again');
        return;
      }
      const newChatRoom = newChatRoomData.data?.createChatRoom;

      // Add the clicked chatUser to the ChatRoom
      const createRoomResult = await doCreateChatRoomUsers({
        variables: {
          input: {
            chatRoomId: newChatRoom?.id,
            userId: user?.id,
          },
        },
      });
      console.log('CREATE ROOM USER RESULT 1: ', createRoomResult);

      // Add the authenticated user (me) to the ChatRoom
      const createRoomResult2 = await doCreateChatRoomUsers({
        variables: {
          input: {
            chatRoomId: newChatRoom?.id,
            userId: authId,
          },
        },
      });
      console.log('CREATE ROOM USER RESULT 2: ', createRoomResult2);

      // navigate to the newly created ChatRoom
      router.push({
        pathname: `/(app)/${user.username}`,
        params: {
          chat: user.username,
          id: newChatRoom.id,
          name: user.username,
        },
      });
    }
  };

  if (!authedUser) return null;

  return (
    <FlatList
      data={regdContacts}
      renderItem={({ item }) =>
        item && (
          <ContactListItem
            user={item}
            onPress={() => createPrivateChatRoom(item)}
          />
        )
      }
      style={{ backgroundColor: 'white' }}
      ListHeaderComponent={() => (
        <TouchableOpacity
          onPress={() => {
            router.push('/newGroup');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            paddingHorizontal: 20,
          }}
        >
          <MaterialIcons
            name='group'
            size={24}
            color='royalblue'
            style={{
              marginRight: 28,
              backgroundColor: 'gainsboro',
              padding: 7,
              borderRadius: 20,
              overflow: 'hidden',
            }}
          />
          <Text style={{ color: 'royalblue', fontSize: 16 }}>New Group</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ContactsScreen;
