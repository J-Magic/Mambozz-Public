import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useActionSheet } from '@expo/react-native-action-sheet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { Ionicons } from '@expo/vector-icons';
import MessageReply from '../MessageReply';
import { useAuth } from '@/context/auth';
import {
  ChatMessage,
  ChatAttachment,
  User,
  GetUserQuery,
  GetChatMessageQuery,
} from '@/src/API';
import { getUser } from '@/src/graphql/queries';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getChatMessage } from '@/src/graphql/queries';
import ImageAttachments from '../ImageAttachments';
import { AttachmentType, UpdateChatMessageMutation } from '@/src/API';
import AudioPlayer from '../AudioPlayer';
import { updateChatMessage } from '@/src/graphql/mutations';

const orangeOpacity = 'rgba(255, 137, 51, 0.25)';
const yellowOpacity = 'rgba(255, 199, 0, 0.25)';

type newChatAttachment = {
  __typename: 'ChatAttachment';
  id: string;
  chatMessageID?: string | null;
  chatRoomID?: string | null;
  storageKey: string;
  type: AttachmentType;
  width?: number | null;
  height?: number | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
  uri: string;
};

type MsgProps = {
  message: ChatMessage | null;
  setAsMessageReply?: () => void;
};
// const Message = (props: any) => {
const Message = ({ message, setAsMessageReply = () => {} }: MsgProps) => {
  // const { setAsMessageReply, message: propMessage } = props;
  const [msg, setMsg] = useState<ChatMessage | null>(message);
  const [decryptedContent, setDecryptedContent] = useState('');
  const [repliedTo, setRepliedTo] = useState<ChatMessage | null | undefined>(
    undefined
  );
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [user, setUser] = useState<string | null>(null);
  const [isMe, setIsMe] = useState<boolean | null>(null);

  const [downloadedAttachments, setDownloadedAttachments] = useState<
    Array<newChatAttachment | null> | []
  >([]);
  const [soundURI, setSoundURI] = useState(null);
  const { showActionSheetWithOptions } = useActionSheet();
  const { width } = useWindowDimensions();
  const { authedUser } = useAuth();
  // console.log('MESSAGE USERID: ', message?.userId);

  useEffect(() => {
    setMsg(message);
  }, [message]);

  useEffect(() => {
    if (msg) {
      setUser(msg?.userId);
      if (msg?.userId !== authedUser) {
        setIsMe(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    const isMyMsg = () => {
      setIsMe(msg?.userId === authedUser);
    };
    isMyMsg();
  }, [user]);

  useEffect(() => {
    if (msg?.replyToMessageID) {
      (async () => {
        const response = (await API.graphql(
          graphqlOperation(getChatMessage, {
            id: msg.replyToMessageID,
          })
        )) as { data: GetChatMessageQuery };

        console.log('Fetched Replied to Msg: ', response);
        setRepliedTo(response.data?.getChatMessage);
      })();
    }
  }, [msg]);

  useEffect(() => {
    setAsRead();
  }, [isMe, msg]);

  // useEffect(() => {
  //   if (message.audio) {
  //     const audioResult = Storage.get(message.audio);
  //     setSoundURI(audioResult);
  //   }
  // }, [message]);

  // const getImageUri  = async (attachment: ChatAttachment) => {
  //  const imgUriResult = await Storage.get(attachment.storageKey);
  //  return {...attachment, imgUriResult}
  // }
  useEffect(() => {
    const downloadAttachments = async () => {
      if (msg?.chatAttachments?.items && msg?.chatAttachments?.items !== null) {
        const downloadedAttachmentsResult = [];

        for (const attachment of msg.chatAttachments.items) {
          const storageKey = attachment?.storageKey;
          if (storageKey) {
            const uri = await Storage.get(storageKey);
            downloadedAttachmentsResult.push({
              ...attachment,
              uri,
            });
          }
        }
        console.log(
          'Downloaded Attachment Result: ',
          downloadedAttachmentsResult
        );
        if (downloadedAttachmentsResult) {
          setDownloadedAttachments(downloadedAttachmentsResult);
        }
      }
    };
    downloadAttachments();
  }, [JSON.stringify(msg?.chatAttachments?.items)]);

  const imageContainerWidth = width * 0.8 - 30;

  // const audioAttachments = downloadedAttachments.filter(
  //   (at) => at?.type === 'AUDIO'
  // );
  // if (audioAttachments) {
  //   console.log('Audio Attachments: ', audioAttachments);
  // }
  const imageAttachments = downloadedAttachments.filter(
    (at) => at?.type === 'IMAGE'
  );

  const videoAttachments = downloadedAttachments.filter(
    (at) => at?.type === 'VIDEO'
  );

  const setAsRead = async () => {
    if (isMe === false && msg?.status !== 'READ') {
      let updatedMsg = (await API.graphql(
        graphqlOperation(updateChatMessage, {
          input: {
            id: msg?.id,
            status: 'READ',
          },
        })
      )) as { data: UpdateChatMessageMutation };
      console.log('MSG UPDATED TO READ RESULT: ', updatedMsg);
    }
  };

  const deleteMessage = async () => {};

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this message',
      [
        {
          text: 'Delete',
          onPress: deleteMessage,
          style: 'destructive',
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  const onActionPress = (index: number | undefined) => {
    if (index === 0) {
      setAsMessageReply();
    } else if (index === 1) {
      if (isMe) {
        confirmDelete();
      } else {
        Alert.alert("Can't perform action", 'This is not your message');
      }
    }
  };

  const openActionMenu = () => {
    const options = ['Reply', 'Delete', 'Cancel'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      },
      onActionPress
    );
  };

  if (!user) {
    return <ActivityIndicator />;
  }
  return (
    <TouchableOpacity
      onLongPress={openActionMenu}
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
        { width: soundURI ? '75%' : 'auto' },
      ]}
    >
      {repliedTo && <MessageReply message={repliedTo} />}
      {/* <View style={styles.row}> */}
      {/* {!!decryptedContent && (
          <Text style={{ color: isMe ? orangeOpacity : yellowOpacity }}>
            {isDeleted ? 'message deleted' : decryptedContent}
          </Text>
        )} */}
      {downloadedAttachments.length > 0 && (
        <View style={[{ width: imageContainerWidth }, styles.images]}>
          <ImageAttachments attachments={imageAttachments} />
        </View>
      )}
      {/* {audioAttachments !== null && (
        <AudioPlayer soundURI={audioAttachments[0]?.uri} />
      )} */}
      {/* {soundURI && <AudioPlayer soundURI={soundURI} />} */}
      {msg && <Text>{msg.text}</Text>}
      {isMe && !!msg?.status && msg?.status !== 'SENT' && (
        <Ionicons
          name={msg.status === 'DELIVERED' ? 'checkmark' : 'checkmark-done'}
          size={16}
          color='gray'
          style={{ marginHorizontal: 5 }}
        />
      )}
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default Message;

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
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
