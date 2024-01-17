import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MaterialIcons,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerAsset } from 'expo-image-picker';
import { Audio, AVPlaybackStatus } from 'expo-av';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-native-get-random-values';
import * as Crypto from 'expo-crypto';
import { useAppDispatch, useAppSelector } from '@/Store';
import { removeMsgReplyingTo } from '@/slices/navSlice';
import { useAuth } from '@/context/auth';
import { Storage } from 'aws-amplify';
import { gql, useMutation } from '@apollo/client';
import {
  ChatRoom,
  ChatMessage,
  ChatRoomUsers,
  CreateChatMessageMutation,
  CreateChatMessageMutationVariables,
  CreateChatMessageInput,
  MessageStatus,
  MessageType,
  CreateChatAttachmentMutation,
  CreateChatAttachmentMutationVariables,
  CreateChatAttachmentInput,
  AttachmentType,
  UpdateChatRoomMutation,
  UpdateChatRoomMutationVariables,
  UpdateChatRoomInput,
} from '@/src/API';
import {
  createChatMessage,
  createChatAttachment,
  updateChatRoom,
} from './ApolloQueries/Mutations';
import MessageComponent from '@/components/Message';
import {
  getChatRoom,
  listChatMessagesByChatRoom,
} from './ApolloQueries/Queries';
dayjs.extend(relativeTime);

type InputBoxProps = {
  chatRoom: ChatRoom | null;
  subscribeToUpdatedChatRoom: () => void;
  // updatedChatRoom: ChatRoom | null;
  removeMessageReplyTo: () => void;
};
interface ProgressInterface {
  [key: string]: number;
}
const InputBox: React.FC<InputBoxProps> = ({
  chatRoom,
  subscribeToUpdatedChatRoom,
  // updatedChatRoom,
  removeMessageReplyTo,
}) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
  const [vidpic, setVidPics] = useState<ImagePickerAsset[] | []>([]);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [uploadProgress, setUploadProgress] = useState<ProgressInterface>({});
  const orangeOpacity = 'rgba(255, 137, 51, 0.25)';
  const yellowOpacity = 'rgba(255, 199, 0, 0.25)';
  const { authedUser } = useAuth();
  const msgReplyingTo = useAppSelector((state) => state.nav.msgReplyingTo);
  let msgRecipient: string | undefined;
  let msgRecipientDets: ChatRoomUsers | null | undefined;
  const dispatch = useAppDispatch();

  // let unifiedChatRoom = Object.assign({}, chatRoom, updatedChatRoom);

  useEffect(() => {
    subscribeToUpdatedChatRoom();
    console.log('CACHE UPDATE FROM CHATROOM SUBSCRIPTION RESPONSE');
  }, []);
  const [
    doCreateChatMsg,
    {
      data: createChatMsgData,
      loading: createChatMsgLoading,
      error: createChatMsgError,
    },
  ] = useMutation<
    CreateChatMessageMutation,
    CreateChatMessageMutationVariables
  >(createChatMessage);

  const [
    doCreateChatAttachment,
    {
      data: createAttachmentData,
      loading: createAttachmentLoading,
      error: createAttachmentError,
    },
  ] = useMutation<
    CreateChatAttachmentMutation,
    CreateChatAttachmentMutationVariables
  >(createChatAttachment);

  const [
    doUpdateChatRoom,
    {
      data: updateChatRoomData,
      loading: updateChatRoomLoading,
      error: updateChatRoomError,
    },
  ] = useMutation<UpdateChatRoomMutation, UpdateChatRoomMutationVariables>(
    updateChatRoom
  );

  // Pick Image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.5,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log('IMAGE PICKER RESULT :', result);

    if (!result.canceled) {
      setVidPics(result.assets);
    }
  };

  const uploadVidPic = async (fileUri: string) => {
    try {
      console.log('FILE URI FROM UPLOAD FNT :', fileUri);
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${Crypto.randomUUID()}.jpg`;
      console.log('KEY: ', key);

      const storageResult = await Storage.put(key, blob, {
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setUploadProgress((p) => ({
            ...p,
            [fileUri]: progress.loaded / progress.total,
          }));
        },
      });
      if (storageResult) {
        console.log('STORAGE RESULT: ', storageResult);
      }
      return key;
    } catch (e) {
      console.log('Error uploading photo or video file: ', e);
    }
  };

  const addAttachment = async (
    file: ImagePickerAsset,
    chatMessageID: string | undefined
  ) => {
    const types = {
      image: 'IMAGE',
      video: 'VIDEO',
      document: 'DOCUMENT',
    };
    let mediaType;
    if (file.type === 'image') {
      mediaType = AttachmentType.IMAGE;
    } else if (file.type === 'video') {
      mediaType = AttachmentType.VIDEO;
    } else {
      mediaType = AttachmentType.DOCUMENT;
    }
    // const newAttachment: CreateChatAttachmentInput = {
    let input: CreateChatAttachmentInput = {
      storageKey: (await uploadVidPic(file.uri)) as string,
      type: mediaType,
      width: file.width,
      height: file.height,
      duration: file.duration,
      chatMessageID,
      chatRoomID: chatRoom?.id,
      // chatRoomID: unifiedChatRoom?.id,
    };

    console.log('NEW ATTACHMENT : ', input);

    const attachmentResult = await doCreateChatAttachment({
      variables: { input },
    });
    console.log('Attachment Result :', attachmentResult);
    return attachmentResult;
  };

  const sendMsg = async () => {
    const msgText = text;
    if (authedUser === chatRoom?.users?.items[0]?.userId) {
      // if (authedUser === unifiedChatRoom?.users?.items[0]?.userId) {
      msgRecipient = chatRoom?.users?.items[1]?.userId;
      msgRecipientDets = chatRoom?.users?.items[1];
    } else {
      msgRecipient = chatRoom?.users?.items[0]?.userId;
      msgRecipientDets = chatRoom?.users?.items[0];
      // msgRecipient = unifiedChatRoom?.users?.items[0]?.userId;
    }
    msgText;
    if (msgRecipient) {
      let input: CreateChatMessageInput = {
        chatRoomId: chatRoom?.id as string,
        // chatRoomId: unifiedChatRoom?.id as string,
        text: msgText,
        userId: authedUser as string,
        forUserId: msgRecipient,
        status: MessageStatus.SENT,
        replyToMessageID: msgReplyingTo?.id,
        type: MessageType.TEXT,
      };
      let newMsgData = await doCreateChatMsg({
        variables: { input },
        update(cache, { data }) {
          const newChatMsg = data?.createChatMessage;

          if (!newChatMsg) {
            // Handle the case where doCreateChatMsg is undefined
            return;
          }
          cache.modify({
            fields: {
              // listChatMessagesByChatRoom({\"chatRoomId\":\"c1b3754d-e214-4ba5-b459-667ebf8f2b5e\",\"sortDirection\":\"DESC\"})
              listChatMessagesByChatRoom(existingMessages, { readField }) {
                const updatedChatMessages = {
                  ...existingMessages,
                  items: [newChatMsg, ...existingMessages.items],
                };
                return updatedChatMessages;
              },
            },
          });
        },
        // optimisticResponse: {
        //   createChatMessage: {
        //     id: 'temp-id',
        //     __typename: 'ChatMessage',
        //     createdAt: 'temp-createdAt',
        //     type: MessageType.TEXT,
        //     text: text,
        //     userId: authedUser as string,
        //     chatRoomId: chatRoom?.id as string,
        //     chatAttachments: {
        //       __typename: 'ModelChatAttachmentConnection',
        //       items: [],
        //       nextToken: null,
        //     },
        //     status: MessageStatus.SENT,
        //     replyToMessageID: msgReplyingTo?.id || 'temp-replyToMessageID',
        //     forUserId: msgRecipient,
        //     updatedAt: 'temp-updatedAt',
        //     owner: authedUser as string,
        //   },
        // },
        // refetchQueries: [listChatMessagesByChatRoom],
        // onQueryUpdated(observableQuery) {
        //   return observableQuery.refetch();
        // },
      });
      setText('');
      if (vidpic) {
        // Create Video and Photo Attachments
        await Promise.all(
          vidpic.map((file) =>
            addAttachment(file, newMsgData?.data?.createChatMessage?.id)
          )
        );
        setVidPics([]);
      }
      let updateChatRoomResult = await doUpdateChatRoom({
        variables: {
          input: {
            id: chatRoom?.id,
            chatRoomId: chatRoom?.id,
            chatRoomLastMessageId: newMsgData?.data?.createChatMessage?.id,
          } as UpdateChatRoomInput,
        },
        // update(cache, { data }) {
        //   const updatedRoom = data?.updateChatRoom;

        //   if (!updatedRoom) {
        //     return;
        //   }
        //   cache.modify({
        //     fields: {
        //       getChatRoom(existingChatRoom) {
        //         return Object.assign({}, existingChatRoom, updatedRoom);
        //       },
        //     },
        //   });
        // },
        // refetchQueries: [getChatRoom],
        // onQueryUpdated(observableQuery) {
        //   return observableQuery.refetch();
        // },
        // optimisticResponse: {
        //   updateChatRoom: {
        //     id: chatRoom?.id as string,
        //     __typename: 'ChatRoom',
        //     chatRoomId: chatRoom?.id,
        //     adminRightsId: chatRoom?.adminRightsId,
        //     name: msgRecipientDets?.user?.username,
        //     image: msgRecipientDets?.user?.chatImage,
        //     users: {
        //       __typename: 'ModelChatRoomUsersConnection',
        //       items: [],
        //       nextToken: null,
        //     },
        //     chatMessages: {
        //       __typename: 'ModelChatMessageConnection',
        //       items: [],
        //       nextToken: null,
        //     },
        //     newMessages: 0,
        //     lastMessage: {
        //       __typename: 'ChatMessage',
        //       id: newMsgData?.data?.createChatMessage?.id as string,
        //       createdAt:
        //         (newMsgData?.data?.createChatMessage?.createdAt as string) ||
        //         'temp-createdAt',
        //       type: MessageType.TEXT,
        //       text: text,
        //       userId: authedUser as string,
        //       chatRoomId: chatRoom?.id as string,
        //       chatAttachments: {
        //         __typename: 'ModelChatAttachmentConnection',
        //         items: [],
        //         nextToken: null,
        //       },
        //       status: MessageStatus.SENT,
        //       replyToMessageID: msgReplyingTo?.id || 'temp-replyToMessageID',
        //       forUserId: msgRecipient,
        //       updatedAt:
        //         (newMsgData?.data?.createChatMessage?.updatedAt as string) ||
        //         'temp-updatedAt',
        //       owner: authedUser as string,
        //     },
        //     chatAttachments: {
        //       __typename: 'ModelChatAttachmentConnection',
        //       items:
        //         newMsgData?.data?.createChatMessage?.chatAttachments?.items ||
        //         [],
        //       nextToken: null,
        //     },
        //     createdAt: 'temp-createdAt',
        //     updatedAt: dayjs().toString(),
        //     chatRoomLastMessageId:
        //       newMsgData?.data?.createChatMessage?.id || undefined,
        //     owner: authedUser as string,
        //   },
        // },
      });
      console.log(
        'FROM INPUTBOX - UPDATE CHATROOM RESULT:',
        updateChatRoomResult
      );
    }
  };
  if (createChatMsgError || createAttachmentError || updateChatRoomError) {
    // <Text>{error.message}</Text>;
    console.log(
      'FROM INPUTBOX - CREATE CHAT MSG ERROR: ',
      createChatMsgError?.message ||
        createAttachmentError?.message ||
        updateChatRoomError?.message
    );
  }
  // console.log('FROM INPUTBOX -  CREATE CHAT MSG MUTATION: ', createChatMsgData);
  // console.log(
  //   'FROM INPUTBOX -  CREATE CHAT ATTACHMENT MUTATION: ',
  //   createAttachmentData
  // );
  // console.log(
  //   'FROM INPUTBOX -  UPDATE CHAT ROOM MUTATION: ',
  //   updateChatRoomData
  // );
  const onPress = () => {
    if (text || vidpic?.length > 0) {
      // Send text msg
      sendMsg();
    }
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      // style={[styles.root, { height: 'auto' }]}
      style={[styles.root, { height: isEmojiPickerOpen ? '50%' : 'auto' }]}
      // style={styles.container}
    >
      {msgReplyingTo?.id && (
        <View
          style={{
            backgroundColor: '#f2f2f2',
            padding: 5,
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>Reply to:</Text>
            <MessageComponent message={msgReplyingTo} />
          </View>
          <TouchableOpacity onPress={() => dispatch(removeMsgReplyingTo())}>
            <AntDesign
              name='close'
              size={24}
              color='black'
              style={{ margin: 5 }}
            />
          </TouchableOpacity>
        </View>
      )}
      {vidpic?.length > 0 && (
        <View style={styles.attachmentsContainer}>
          <FlatList
            data={vidpic}
            horizontal
            renderItem={({ item }) => (
              <>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.selectedImage}
                  resizeMode='contain'
                />
                {uploadProgress[item.uri] && (
                  <View
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      backgroundColor: '#8c8c8cAA',
                      padding: 5,
                      borderRadius: 50,
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                      {(uploadProgress[item.uri] * 100).toFixed(0)}%
                    </Text>
                  </View>
                )}
                <MaterialIcons
                  name='highlight-remove'
                  onPress={() =>
                    setVidPics((existingVidPic) =>
                      existingVidPic.filter((file) => file !== item)
                    )
                  }
                  size={20}
                  color='gray'
                  style={styles.removeSelectedImage}
                />
              </>
            )}
          />
        </View>
      )}
      {/* Icon */}
      {/* <AntDesign onPress={pickImage} name='plus' size={24} color='royalblue' /> */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={
              () => {}
              // setIsEmojiPickerOpen((currentValue) => !currentValue)
            }
          >
            {/* Icon */}
            <SimpleLineIcons
              onPress={() => {}}
              name='emotsmile'
              size={24}
              color='#595959'
              style={styles.icon}
            />
          </TouchableOpacity>
          {/* TextInput */}
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder='Type your message...'
            multiline={true}
            textAlignVertical='top'
          />
          <TouchableOpacity onPress={pickImage}>
            <Feather
              name='image'
              size={26}
              // color='#595959'
              color='black'
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name='camera'
              size={26}
              color='#595959'
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#FFCB45',
              width: 45,
              height: 45,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {text || vidpic?.length > 0 ? (
              <Ionicons name='send' size={18} color='black' />
            ) : (
              <MaterialCommunityIcons
                name={recording ? 'microphone' : 'microphone-outline'}
                size={28}
                color={recording ? 'red' : 'black'}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Icon */}
      <MaterialIcons
        // onPress={onSend}
        // style={styles.send}
        name='send'
        size={24}
        color='white'
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'whitesmoke',
//     padding: 5,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 5,
//     paddingHorizontal: 10,
//     marginHorizontal: 10,
//     borderRadius: 50,
//     borderColor: 'lightgray',
//     borderWidth: StyleSheet.hairlineWidth,
//     fontSize: 20,
//   },
//   send: {
//     backgroundColor: 'royalblue',
//     padding: 7,
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   attachmentsContainer: {
//     alignItems: 'flex-end',
//   },
//   selectedImage: {
//     height: 100,
//     width: 200,
//     margin: 5,
//   },
//   removeSelectedImage: {
//     position: 'absolute',
//     right: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
// });

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
  selectedImage: {
    height: 100,
    width: 200,
    margin: 5,
  },
  attachmentsContainer: {
    alignItems: 'flex-end',
  },

  sendImageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
  },
  removeSelectedImage: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  recordingBackground: {
    width: '100%',
    backgroundColor: 'rgba(255, 199, 0, 0.25)',
  },
});

export default InputBox;
