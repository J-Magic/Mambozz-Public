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
import { ChatRoom, User } from '@/src/API';
import { GraphQLSubscription } from '@aws-amplify/api';
import SmartImage from './SmartImage';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }: any) => {
  // const navigation = useNavigation();
  const { authedUser } = useAuth();
  const [user, setUser] = useState<User>(chat.users.user);
  const [chatRoom, setChatRoom] = useState<ChatRoom>(chat);
  // let subscription: any

  console.log('Chat from ChatListItem :', chat);

  useEffect(() => {
    const fetchUser = async () => {
      // Loop through chat.users.items and find a user that is not us
      // (Authenticated User)
      const userItem = chat.users.items.find(
        (item: any) => item.user.id !== authedUser
      );
      setUser(userItem?.user);
    };
    fetchUser();
  }, [chat.id]);

  // fetch chat room
  useEffect(() => {
    // Subscribe to chatroom updates
    const subscription = API.graphql<
      GraphQLSubscription<typeof onUpdateChatRoom>
    >(
      graphqlOperation(onUpdateChatRoom, {
        filter: { id: { eq: chat.id } },
      })
    ).subscribe({
      next: (payload: { provider: any; value: any }) => {
        console.log('PAYLOAD.VALUE :', payload.value);
        if (
          chat.id === payload.value.data.onUpdateChatRoom.lastMessage.chatRoomId
        ) {
          setChatRoom((ch) => ({
            ...(ch || {}),
            ...payload.value.data.onUpdateChatRoom,
          }));
        }
      },

      error: (err) => console.warn('Error :', err),
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [chat.id]);

  if (!authedUser) return null;
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/[chat]',
          params: { id: chat.id, chat: chat.name ? chat.name : user?.username },
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
            uri: chat.name ? chat.image : user?.chatImage,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.name || user?.username}
          </Text>

          {chat.lastMessage && (
            <Text style={styles.subTitle} numberOfLines={2}>
              {dayjs(
                chat.id === chatRoom.id
                  ? chatRoom?.lastMessage?.createdAt
                  : chat.lastMessage?.createdAt
              ).fromNow(true)}
            </Text>
          )}
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.id === chatRoom.id
            ? chatRoom?.lastMessage?.text
            : chat.lastMessage?.text}
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
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
