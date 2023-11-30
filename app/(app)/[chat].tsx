import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import InputBox from '@/components/InputBox';
import React, { useState, useEffect } from 'react';
import Message from '@/components/Message';
import { Stack, useLocalSearchParams } from 'expo-router';
import { API, graphqlOperation } from 'aws-amplify';
import {
  GetChatRoomQuery,
  GetChatRoomQueryVariables,
  ListChatMessagesByChatRoomQuery,
} from '@/src/API';
import { ChatRoom, ChatMessage } from '@/src/API';
// import { getChatRoom } from '@/src/graphql/queries';
import { getChatRoom } from '@/components/ApolloQueries/Queries';
import { listChatMessagesByChatRoom } from '@/src/graphql/queries';
import {
  onUpdateChatRoom,
  onCreateChatMessage,
  onCreateChatAttachment,
} from '@/src/graphql/subscriptions';
import Observable from 'zen-observable';
import { OnCreateChatMessageSubscription } from '@/src/API';
import { GraphQLSubscription } from '@aws-amplify/api';
import { useAuth } from '../../context/auth';
import { useAppDispatch, useAppSelector } from '@/Store';
import { setMsgReplyingTo } from '@/slices/navSlice';
import RecordingPlayer from '@/components/RecordingPlayer';

import { useQuery, useMutation } from '@apollo/client';

const chat = () => {
  const authedUser = useAuth();

  const { id, name, chat } = useLocalSearchParams<{
    id: string;
    name: string;
    chat: string;
  }>();

  console.log('ID: ', id);
  console.log('NAME: ', name);

  const chatRoomId = id;
  console.log('ChatRoomId: ', chatRoomId);

  const dispatch = useAppDispatch();
  // const [chatRoom, setChatRoom] = useState<{} | null | undefined>(
  //   {} as ChatRoom
  // );

  const msgReplyingTo = useAppSelector((state) => state.nav.msgReplyingTo);

  console.log('Message Replying to - ChatScreen: ', msgReplyingTo);

  const [messages, setMessages] = useState<
    Array<ChatMessage | null> | null | undefined
  >(undefined);
  const [messageReplyTo, setMessageReplyTo] = useState<
    ChatMessage | null | undefined
  >(undefined);

  const {
    data: chatRoomData,
    loading: chatRoomLoading,
    error: chatRoomError,
  } = useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(getChatRoom, {
    variables: {
      id: chatRoomId,
    },
  });

  // Fetch Chatroom
  // useEffect(() => {
  //   (async () => {
  // const result = (await API.graphql(
  //   graphqlOperation(getChatRoom, { id: chatRoomId })
  // )) as { data: GetChatRoomQuery };
  //   setChatRoom(chatRoomData?.getChatRoom);
  // })();

  if (chatRoomLoading) {
    return <ActivityIndicator />;
  }
  if (chatRoomError) {
    return;
  }
  if (chatRoomError) {
    // <Text>{error.message}</Text>;
    console.log('APOLLO CLIENT ERROR: ', chatRoomError);
  }
  const chatRoom = chatRoomData?.getChatRoom;

  console.log('Fetched Chatroom Object :', chatRoomData?.getChatRoom);
  console.log(
    'Fetched ChatRoom :',
    chatRoomData?.getChatRoom?.users?.items[0]?.userId
  );

  // Subscribe to chatroom updates

  //   const subscription = API.graphql<
  //     GraphQLSubscription<typeof onUpdateChatRoom>
  //   >(
  //     graphqlOperation(onUpdateChatRoom, {
  //       filter: { id: { eq: chatRoomId } },
  //     })
  //   ).subscribe({
  //     next: (payload: { provider: any; value: any }) => {
  //       console.log('PAYLOAD.VALUE :', payload.value);
  //       setChatRoom((currentChatRoom) => ({
  //         ...(currentChatRoom || {}),
  //         ...payload.value.data.onUpdateChatRoom,
  //       }));
  //     },

  //     error: (err) => console.warn('Error :', err),
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [chatRoomId]);

  // Fetch Chat Messages
  // useEffect(() => {
  //   (async () => {
  //     const result = (await API.graphql(
  //       graphqlOperation(listChatMessagesByChatRoom, {
  //         chatRoomId,
  //         sortDirection: 'DESC',
  //       })
  //     )) as { data: ListChatMessagesByChatRoomQuery };

  //     console.log(
  //       'Fetched Messages: ',
  //       result.data?.listChatMessagesByChatRoom?.items
  //     );
  //     setMessages(result.data?.listChatMessagesByChatRoom?.items);
  //   })();

  // Subscribe to new messages
  // const subscription = API.graphql<
  //   GraphQLSubscription<typeof onCreateChatMessage>
  // >(
  //   graphqlOperation(onCreateChatMessage, {
  //     filter: { chatRoomId: { eq: chatRoomId } },
  //   })
  // ).subscribe({
  //   //  next: ({ value }) => {
  //   next: (payload: { provider: any; value: any }) => {
  //     console.log('PAYLOAD.VALUE :', payload.value);
  //     setMessages((existingMsgs) => [
  //       //  value.data.onCreateChatMessage,
  //       payload.value.data.onCreateChatMessage,
  //       ...(existingMsgs || []),
  //     ]);
  //   },

  //   error: (err) => console.warn('Error :', err),
  // });

  // Subscribe to new attachments.
  //   const attachmentsSubscription = API.graphql<
  //     GraphQLSubscription<typeof onCreateChatAttachment>
  //   >(
  //     graphqlOperation(onCreateChatAttachment, {
  //       filter: { chatRoomID: { eq: chatRoomId } },
  //     })
  //   ).subscribe({
  //     next: (payload: { provider: any; value: any }) => {
  //       console.log('PAYLOAD.VALUE.ATTACHMENT :', payload.value);
  //       const newAttachMent = payload.value.data.onCreateChatAttachment;
  //       if (newAttachMent !== null) {
  //         setMessages((existingMsgs) => {
  //           const messageToUpdate = existingMsgs?.find(
  //             (em) => em?.id === newAttachMent.chatMessageID
  //           );
  //           if (!messageToUpdate) {
  //             return existingMsgs;
  //           }
  //           if (
  //             messageToUpdate &&
  //             messageToUpdate.chatAttachments &&
  //             !messageToUpdate.chatAttachments.items
  //           ) {
  //             messageToUpdate.chatAttachments.items = [];
  //           }
  //           if (messageToUpdate && messageToUpdate.chatAttachments) {
  //             messageToUpdate.chatAttachments.items.push(newAttachMent);
  //           }

  //           return existingMsgs?.map((msg) =>
  //             msg?.id == messageToUpdate.id ? messageToUpdate : msg
  //           );
  //         });
  //       }
  //     },
  //     error: (err) =>
  //       console.warn('Error: failed to subscribe to chat attachments.', err),
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //     attachmentsSubscription.unsubscribe();
  //   };
  // }, [chatRoomId]);

  // if (!authedUser) return <ActivityIndicator />;
  // if (chatRoomLoading) {
  //   return <ActivityIndicator />;
  // }

  return (
    // <SafeAreaView style={styles.page}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // behavior={Platform.select({ios='padding'})}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={styles.page}
    >
      <Stack.Screen
        options={{
          title: name ? name : chat,
        }}
      />
      <FlatList
        style={styles.list}
        data={messages}
        renderItem={({ item }) => (
          <Message
            message={item}
            // setAsMessageReply={() => setMessageReplyTo(item)}
            setAsMessageReply={() => dispatch(setMsgReplyingTo({ msg: item }))}
          />
        )}
        inverted
      />

      <InputBox
        chatRoom={chatRoom}
        // messageReplyTo={msgReplyingTo}
        // removeMessageReplyTo={() => setMessageReplyTo(null)}
        // removeMessageReplyTo={() => dispatch(setMsgReplyingTo({ msg: null }))}
      />
      {/* <RecordingPlayer /> */}
    </KeyboardAvoidingView>
    // </SafeAreaView>
  );
};

export default chat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
