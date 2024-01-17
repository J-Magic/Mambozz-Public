import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { onUpdateChatRoom } from '@/src/graphql/subscriptions';
import { Entypo } from '@expo/vector-icons';
import { useAuth } from '@/context/auth';
import { router } from 'expo-router';
import {
  ChatRoom,
  ChatRoomUsers,
  OnUpdateChatroomByChatroomIdSubscription,
  OnUpdateChatroomByChatroomIdSubscriptionVariables,
} from '@/src/API';
import { GraphQLSubscription } from '@aws-amplify/api';
import SmartImage from './SmartImage';
import { User } from './ApolloQueries/Types';
import { useSubscription } from '@apollo/client';
import { onUpdateChatroomByChatroomId } from './ApolloQueries/Subscriptions';

dayjs.extend(relativeTime);
type ChatProp = {
  chat: ChatRoom | undefined;
};
// const ChatListItem = ({ chat }: any) => {
const ChatListItem = ({ chat }: ChatProp) => {
  const { authedUser, authId } = useAuth();
  // const [user, setUser] = useState<User>(chat.users.user);
  const [user, setUser] = useState<User>();
  const [chatRoom, setChatRoom] = useState<ChatRoom | undefined>(chat);

  // console.log('Chat from ChatListItem :', chat);
  let chatRoomId: string = chat?.id as string;
  let chatRoomName = chat?.name ? chat?.name : user?.username;
  let chatRoomImage = chat?.image ? chat?.image : user?.chatImage;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // Loop through chat.users.items and find a user that is not us
  //     // (Authenticated User)
  //     const userItem = chat.users.items.find(
  //       (item: any) => item.user.id !== authedUser
  //     );
  //     setUser(userItem?.user);
  //   };
  //   fetchUser();
  // }, [chat.id]);

  useEffect(() => {
    const fetchUser = async () => {
      // Loop through chat.users.items and find a user that is not us
      // (Authenticated User)
      const userItem = chat?.users?.items.find(
        (item: ChatRoomUsers | null) => item?.user.id !== authId
      );
      setUser(userItem?.user);
    };
    fetchUser();
  }, [chat?.id]);

  // fetch chat room
  // useEffect(() => {
  //   // Subscribe to chatroom updates
  //   const subscription = API.graphql<
  //     GraphQLSubscription<typeof onUpdateChatRoom>
  //   >(
  //     graphqlOperation(onUpdateChatRoom, {
  //       filter: { id: { eq: chat.id } },
  //     })
  //   ).subscribe({
  //     next: (payload: { provider: any; value: any }) => {
  //       console.log('PAYLOAD.VALUE :', payload.value);
  //       if (
  //         chat.id === payload.value.data.onUpdateChatRoom.lastMessage.chatRoomId
  //       ) {
  //         setChatRoom((ch) => ({
  //           ...(ch || {}),
  //           ...payload.value.data.onUpdateChatRoom,
  //         }));
  //       }
  //     },

  //     error: (err) => console.warn('Error :', err),
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [chat.id]);

  const {
    data: updateChatRoomSubscriptionData,
    error: updateChatRoomSubscriptionError,
  } = useSubscription<
    OnUpdateChatroomByChatroomIdSubscription,
    OnUpdateChatroomByChatroomIdSubscriptionVariables
  >(onUpdateChatroomByChatroomId, {
    variables: {
      chatRoomId,
    },
  });

  useEffect(() => {
    // if (chatRoom && updateChatRoomSubscriptionData) {
    if (updateChatRoomSubscriptionData) {
      setChatRoom((ch) => ({
        ...(ch || {}),
        ...(updateChatRoomSubscriptionData?.onUpdateChatroomByChatroomId as ChatRoom),
      }));
    }
    // }, [chatRoom, updateChatRoomSubscriptionData]);
    // }, [updateChatRoomSubscriptionData, chat?.id]);
  }, [updateChatRoomSubscriptionData]);

  if (!authedUser) return null;

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          // pathname: '/[chat]',
          pathname: `/(app)/${user?.username}`,
          params: {
            id: chat?.id as string,
            // chat: chat?.name as string ? chat?.name : user?.username as string
            chat: chatRoomName as string,
          },
        })
      }
      style={styles.container}
    >
      {/* <View style={styles.image}> */}
      <View>
        {/* <SmartImage
          imgKey={user?.imageKey} */}
        <Image
          source={{
            // uri: chat.name ? chat.image : user?.chatImage,
            uri: chatRoomImage as string,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {/* {chat.name || user?.username} */}
            {chatRoomName}
          </Text>

          {chat?.lastMessage && (
            <Text style={styles.subTitle} numberOfLines={1}>
              {dayjs(
                chat.id === chatRoom?.id
                  ? chatRoom?.lastMessage?.createdAt
                  : chat.lastMessage?.createdAt
              ).fromNow(true)}
            </Text>
          )}
        </View>

        <Text numberOfLines={1} style={styles.subTitle}>
          {chat?.id === chatRoom?.id
            ? chatRoom?.lastMessage?.text
            : chat?.lastMessage?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default ChatListItem;
