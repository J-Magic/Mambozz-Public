import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/context/auth';
import { ChatMessage } from '@/src/API';

const orangeOpacity = 'rgba(255, 137, 51, 0.25)';
const yellowOpacity = 'rgba(255, 199, 0, 0.25)';

const MessageReply = (props: any) => {
  const { message: propMessage } = props;
  // const [message, setMessage] = useState<ChatMessage>(propMessage);
  const [message, setMessage] = useState<ChatMessage | null | undefined>(
    undefined
  );
  const [user, setUser] = useState(undefined);
  const [isMe, setIsMe] = useState<boolean>(false);
  const [soundURI, setSoundURI] = useState(null);
  const { authedUser } = useAuth();

  const { width } = useWindowDimensions();

  useEffect(() => {
    setMessage(propMessage);
  }, [propMessage]);

  useEffect(() => {
    if (!authedUser) {
      return;
    }
    const isMyMsg = () => {
      setIsMe(message?.userId === authedUser);
    };
    isMyMsg();
  }, [authedUser]);

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
        { width: soundURI ? '75%' : 'auto' },
      ]}
    >
      <View style={styles.row}>
        {/* {message.image && (
          <View
            style={{
              marginBottom: message.text ? 10 : 0,
            }}
          ></View>
        )} */}
        {!!message?.text && (
          <Text
            style={{
              color: isMe ? 'black' : 'white',
            }}
          >
            {message.text}
          </Text>
        )}

        {isMe && !!message?.status && message?.status !== 'SENT' && (
          <Ionicons
            name={
              message.status === 'DELIVERED' ? 'checkmark' : 'checkmark-done'
            }
            size={16}
            color='gray'
            style={{ marginHorizontal: 5 }}
          />
        )}
      </View>
    </View>
  );
};

export default MessageReply;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageReply: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  leftContainer: {
    backgroundColor: yellowOpacity,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: {
    backgroundColor: orangeOpacity,
    marginLeft: 'auto',
    marginRight: 10,
    alignItems: 'flex-end',
  },
});
