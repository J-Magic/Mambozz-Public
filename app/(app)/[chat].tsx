import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { Platform, KeyboardAvoidingView, FlatList } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import Message from '@/components/Message';
import InputBox from '../../components/InputBox';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
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
} from '@/src/API';
import {
  getChatRoom,
  listChatMessagesByChatRoom,
} from '@/components/ApolloQueries/Queries';
import { onUpdateChatroomByChatroomId } from '@/components/ApolloQueries/Subscriptions';
import { setMsgReplyingTo } from '@/slices/navSlice';

const chat = () => {
  const { id, name, chat } = useLocalSearchParams<{
    id: string;
    name: string;
    chat: string;
  }>();
  console.log('ID:', id);
  const chatRoomId = id;
  const dispatch = useAppDispatch();
  const msgReplyingTo = useAppSelector((state) => state.nav.msgReplyingTo);
  // const [messages, setMessages] = useState<
  //   Array<ChatMessage | null> | null | undefined
  // >(undefined);

  // Fetch ChatRoom.
  const {
    data: chatRoomData,
    loading: chatRoomLoading,
    error: chatRoomError,
  } = useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(getChatRoom, {
    variables: {
      id: chatRoomId,
    },
  });

  // Fetch Chat Messages
  const {
    data: msgsByChatRoomData,
    loading: msgsByChatRoomLoading,
    error: msgsByChatRoomError,
  } = useQuery<
    ListChatMessagesByChatRoomQuery,
    ListChatMessagesByChatRoomQueryVariables
  >(listChatMessagesByChatRoom, {
    variables: {
      chatRoomId,
      sortDirection: ModelSortDirection.DESC,
    },
  });

  // Subscribe to chatroom updates
  const {
    data: updateChatRoomSubscriptionData,
    error: updateChatRoomSubscriptionError,
  } = useSubscription<
    OnUpdateChatroomByChatroomIdSubscription,
    OnUpdateChatroomByChatroomIdSubscriptionVariables
  >(onUpdateChatroomByChatroomId, {
    variables: {
      chatRoomID: chatRoomId,
    },
  });
  console.log('ON UPDATE CHATROOM DATA: ', updateChatRoomSubscriptionData);
  if (chatRoomLoading || msgsByChatRoomLoading) {
    return <ActivityIndicator />;
  }
  if (chatRoomError || msgsByChatRoomError) {
    console.log('APOLLO CLIENT ERROR: ', chatRoomError || msgsByChatRoomError);
  }
  console.log('Fetched Chatroom Object :', chatRoomData?.getChatRoom);
  console.log(
    'Fetched ChatRoom :',
    chatRoomData?.getChatRoom?.users?.items[0]?.userId
  );
  const chatRoom = chatRoomData?.getChatRoom || {};

  console.log(
    'FETCHED MESSAGES: ',
    msgsByChatRoomData?.listChatMessagesByChatRoom?.items
  );
  const messages = msgsByChatRoomData?.listChatMessagesByChatRoom?.items || [];

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

      <InputBox chatRoom={chatRoom} />
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
