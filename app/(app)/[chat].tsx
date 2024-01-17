import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Platform, KeyboardAvoidingView, FlatList } from 'react-native';
import { Stack, useFocusEffect, useLocalSearchParams } from 'expo-router';
import Message from '@/components/Message';
import InputBox from '../../components/InputBox';
import { useQuery, useSubscription, NetworkStatus } from '@apollo/client';
import { useAppDispatch, useAppSelector } from '@/Store';
import {
  ChatMessage,
  GetChatRoomQuery,
  GetChatRoomQueryVariables,
  ListChatMessagesByChatRoomQuery,
  ListChatMessagesByChatRoomQueryVariables,
  ModelSortDirection,
  OnUpdateChatroomByChatroomIdSubscription,
  OnUpdateChatroomByChatroomIdSubscriptionVariables,
  OnCreateNewChatMessageByChatroomIdSubscription,
  OnCreateNewChatMessageByChatroomIdSubscriptionVariables,
  ChatRoom,
  OnCreateChatMessageSubscription,
  OnCreateChatMessageSubscriptionVariables,
  GetUserQuery,
  GetUserQueryVariables,
  CreateChatRoomUsersMutation,
  CreateChatRoomUsersMutationVariables,
  CreateChatRoomMutation,
  CreateChatRoomMutationVariables,
  CreateChatRoomInput,
} from '@/src/API';
import {
  getChatRoom,
  listChatMessagesByChatRoom,
  listChatRooms,
} from '@/components/ApolloQueries/Queries';
import {
  onUpdateChatroomByChatroomId,
  onCreateNewChatMessageByChatroomId,
} from '@/components/ApolloQueries/Subscriptions';
import { setMsgReplyingTo } from '@/slices/navSlice';
import { useAuth } from '@/context/auth';
import {
  createChatRoom,
  createChatRoomUsers,
} from '@/components/ApolloQueries/Mutations';
import { useApolloClient, useReactiveVar } from '@apollo/client';
// import { cacheVar } from '../apollo/ApolloCache';

const chat = () => {
  const { authedUser, authId } = useAuth();
  // const client = useApolloClient();
  const { id, name, chat, userId } = useLocalSearchParams<{
    id: string;
    userId: string;
    name: string;
    chat: string;
  }>();

  const chatRoomId = id;

  const dispatch = useAppDispatch();

  const [newMessages, setNewMessages] = useState<ChatMessage[]>([]);
  const [updatedChatRoom, setUpdatedChatRoom] = useState<ChatRoom | null>(null);

  // Fetch ChatRoom.
  const {
    subscribeToMore,
    data: chatRoomData,
    loading: chatRoomLoading,
    error: chatRoomError,
    // refetch: chatRoomRefetch,
    // networkStatus: chatRoomNetworkStatus,
  } = useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(getChatRoom, {
    variables: {
      id: chatRoomId,
    },
    // notifyOnNetworkStatusChange: true,
  });

  // Fetch Chat Messages
  const {
    data: msgsByChatRoomData,
    loading: msgsByChatRoomLoading,
    error: msgsByChatRoomError,
    // refetch: messagesRefetch,
    // networkStatus: messagesNetworkStatus,
  } = useQuery<
    ListChatMessagesByChatRoomQuery,
    ListChatMessagesByChatRoomQueryVariables
  >(listChatMessagesByChatRoom, {
    variables: {
      chatRoomId,
      sortDirection: ModelSortDirection.DESC,
    },
    // notifyOnNetworkStatusChange: true,
  });

  // Subscribe to new messages
  const {
    data: newMessagesSubscriptionData,
    loading: newMessageSubscriptionLoading,
    error: newMessagesSubscriptionError,
  } = useSubscription<
    OnCreateNewChatMessageByChatroomIdSubscription,
    OnCreateNewChatMessageByChatroomIdSubscriptionVariables
  >(onCreateNewChatMessageByChatroomId, {
    variables: {
      chatRoomId,
    },
  });

  useEffect(() => {
    if (
      newMessagesSubscriptionData?.onCreateNewChatMessageByChatroomId
        ?.forUserId === authedUser
    ) {
      console.log('FROM CHAT - NEW MESSAGE SUBSCRIPTION TRIGGERING USE-EFFECT');

      setNewMessages((existingNewMsgs) => [
        newMessagesSubscriptionData?.onCreateNewChatMessageByChatroomId as ChatMessage,
        ...(existingNewMsgs || []),
      ]);
    }
  }, [
    JSON.stringify(
      newMessagesSubscriptionData?.onCreateNewChatMessageByChatroomId?.text
    ),
    // newMessagesSubscriptionData,
    chatRoomId,
  ]);

  // useEffect(() => {
  //   messagesRefetch();
  //   chatRoomRefetch();
  // }, []);

  // const cache = useReactiveVar(cacheVar);
  // const rootQueryData = cache.extract();

  // console.log('ROOT DATA: ', rootQueryData.ROOT_QUERY);

  if (!chatRoomId || !id) {
    console.log('NO CHATROOM ID!');
    return;
  }

  // if (messagesNetworkStatus === NetworkStatus.refetch) {
  //   return (
  //     <>
  //       <ActivityIndicator />
  //       <Text> Refetching Messages...</Text>
  //     </>
  //   );
  // }

  // if (chatRoomNetworkStatus === NetworkStatus.refetch) {
  //   return (
  //     <>
  //       <ActivityIndicator />
  //       <Text> Refetching Chatroom...</Text>
  //     </>
  //   );
  // }
  if (chatRoomLoading) {
    console.log('FETCHING CHATROOM: ', chatRoomLoading);
  }
  if (msgsByChatRoomLoading) {
    console.log('FETCHING MESSAGES: ', msgsByChatRoomLoading);
  }
  const chatRoom = (chatRoomData?.getChatRoom as ChatRoom) || null;
  const messages = msgsByChatRoomData?.listChatMessagesByChatRoom?.items || [];

  // console.log('Fetched Chatroom Object :', chatRoomData?.getChatRoom);
  // console.log(
  //   'Fetched ChatRoom :',
  //   chatRoomData?.getChatRoom?.users?.items[0]?.userId
  // );

  // console.log(
  //   'FETCHED MESSAGES: ',
  //   msgsByChatRoomData?.listChatMessagesByChatRoom?.items
  // );
  // console.log(
  //   'CHATROOM UPDATES SUBSCRIPTION FEEDBACK: ',
  //   updateChatRoomSubscriptionData
  // );
  // console.log('NEW MSGS: ', newMessagesSubscriptionData);

  // setMessages(msgsByChatRoomData?.listChatMessagesByChatRoom?.items);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // behavior={Platform.select({ 'ios' === 'padding' })}
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
        data={[...newMessages, ...messages]}
        // data={messages}
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
        subscribeToUpdatedChatRoom={() =>
          subscribeToMore({
            document: onUpdateChatroomByChatroomId,
            variables: { chatRoomId },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const updatedChatRoom = subscriptionData?.data?.getChatRoom;

              return Object.assign({}, prev, updatedChatRoom);
            },
          })
        }
        removeMessageReplyTo={() => dispatch(setMsgReplyingTo({ msg: null }))}
      />
    </KeyboardAvoidingView>
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
