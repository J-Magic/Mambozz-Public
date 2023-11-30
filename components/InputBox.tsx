import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import 'react-native-get-random-values';
import { Audio, AVPlaybackStatus } from 'expo-av';
// import { box } from 'tweetnacl';
import { useAuth } from '@/context/auth';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {
  createChatMessage,
  updateChatRoom,
  createChatAttachment,
} from '@/src/graphql/mutations';
import {
  ChatRoom,
  ChatRoomUsers,
  CreateChatMessageMutation,
  UpdateChatRoomMutation,
  GetChatRoomQuery,
  User,
  CreateChatAttachmentMutation,
} from '@/src/API';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageComponent from '@/components/Message';
import { useAppDispatch, useAppSelector } from '@/Store';
import { removeMsgReplyingTo, setSoundURI } from '@/slices/navSlice';
import { ImagePickerAsset } from 'expo-image-picker';
import * as Crypto from 'expo-crypto';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import AudioPlayer from './AudioPlayer';
import { ChatMessage } from '@/src/API';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const InputBox = (chatRoom: any) => {
  // const { removeMessageReplyTo } = props;
  const { width, height } = useWindowDimensions();
  interface ProgressInterface {
    [key: string]: number;
  }
  const msgReplyingTo = useAppSelector((state) => state.nav.msgReplyingTo);
  const uriSound = useAppSelector((state) => state.nav.soundURI);
  console.log('Message Replying to from input box: ', msgReplyingTo);
  const [text, setText] = useState<string | undefined>(undefined);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState<Audio.Recording | null>(null);
  const [vidpic, setVidPics] = useState<ImagePickerAsset[] | []>([]);
  // const [msgReplyingTo, setMsgReplyingTo] = useState<
  //   ChatMessage | null | undefined
  // >(undefined);

  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<ProgressInterface>({});
  const [audioUploadProgress, setAudioUploadProgress] =
    useState<ProgressInterface>({});
  // const [audioUploadProgress, setAudioUploadProgress] = useState<number | null > (null)
  // const [soundURI, setSoundURI] = useState<string | null>(null);

  const orangeOpacity = 'rgba(255, 137, 51, 0.25)';
  const yellowOpacity = 'rgba(255, 199, 0, 0.25)';
  const [pop, setPop] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { authedUser } = useAuth();
  const dispatch = useAppDispatch();
  let msgRecipient: string;

  console.log('URISOUND FROM NAVSLICE CONSOLE ON INPUTBOX: ', uriSound);
  // const replyingMsg = useAppSelector((state) => state.nav.msgReplyingTo);
  // if (replyingMsg !== null && replyingMsg !== undefined) {
  //   setMsgReplyingTo(replyingMsg);
  // }
  // const [recBtn] = useState(new Animated.Value(50));
  // const popIn = () => {
  //   setPop(true);
  //   Animated.timing(recBtn, {
  //     toValue: 90,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const popOut = () => {
  //   setPop(false);
  //   Animated.timing(recBtn, {
  //     toValue: 40,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  const pickLockedRecHeight = height / 7;
  // const Y = useSharedValue(0);
  // const [locked, setLocked] = useState<boolean>(false);
  // const handleLocking = (isLocked: boolean) => {
  //   if (isLocked !== locked) {
  //     setLocked(isLocked);
  //   }
  // };

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };
  // const handleGestureEvent = useAnimatedGestureHandler({
  //   onStart: (e, ctx) => {
  //     //  ctx.completed = toggled
  //     console.log('ON START');
  //     console.log('EVENT: ', e);
  //     console.log('CTX: ', ctx);
  //   },
  //   onActive: (e, ctx) => {
  //     console.log('ON ACTIVE');
  //     console.log('EVENT: ', e);

  //     Y.value = e.translationY;
  //   },
  //   onEnd: (e) => {
  //     console.log('ON END');
  //     console.log('VELOCITY Y: ', e.velocityY);

  //     if (Y.value < -pickLockedRecHeight / 2) {
  //       // Locking
  //       Y.value = withSpring(-pickLockedRecHeight);
  //       // runOnJS(openBottomSheet)();
  //     } else {
  //       // Don't Lock
  //       Y.value = withSpring(2);
  //     }
  //     runOnJS(handleLocking)(true);
  //   },
  // });

  // const AnimatedStyles = {
  //   swipeStyles: useAnimatedStyle(() => {
  //     return {
  //       transform: [
  //         {
  //           // translateY: withTiming(Y.value),
  //           translateY: Y.value,
  //         },
  //       ],
  //     };
  //   }),
  //   swipeText: useAnimatedStyle(() => {
  //     return {
  //       opacity: interpolate(Y.value, [0, 50], [1, 0], Extrapolation.CLAMP),
  //     };
  //   }),
  // };
  // const startRecording = async () => {
  //   // popIn();
  //   try {
  //     console.log('Requesting permissions..');
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     });

  //     console.log('Starting recording..');
  //     const { recording } = await Audio.Recording.createAsync(
  //       Audio.RecordingOptionsPresets.HIGH_QUALITY
  //       // onRecordingStatusUpdate,
  //       // progressUpdateIntervalMillis,
  //     );
  //     // setRecording(recording);
  //     setIsRecording(recording);
  //     console.log('Recording started');
  //   } catch (e) {
  //     console.error('Failed to start recording', e);
  //   }
  // };

  // const stopRecording = async () => {
  //   console.log('Stopping recording..');
  //   if (!isRecording) {
  //     return;
  //   }

  //   const recordingStopped = await isRecording.stopAndUnloadAsync();
  //   await Audio.setAudioModeAsync({
  //     allowsRecordingIOS: false,
  //   });
  //   console.log('Recording Stopeed Object:', recordingStopped);

  //   const uri = isRecording.getURI();
  //   setIsRecording(null);
  //   console.log('Recording stopped and stored at ', uri);
  //   if (!uri) {
  //     return;
  //   }
  //   setSoundURI(uri);
  //   // popOut();
  // };

  const getBlob = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const uploadAudio = async () => {
    try {
      // if (!soundURI) {
      //   return;
      // }
      if (!uriSound) {
        return;
      }
      // const uriParts = soundURI.split('.');
      const uriParts = uriSound.split('.');
      const extension = uriParts[uriParts.length - 1];
      // const blob = await getBlob(soundURI);
      const blob = await getBlob(uriSound);
      const key = `${Crypto.randomUUID()}.${extension}`;
      const storageResult = await Storage.put(key, blob, {
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setAudioUploadProgress((a) => ({
            ...a,
            // [soundURI]: progress.loaded / progress.total,
            [uriSound]: progress.loaded / progress.total,
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

  const sendAudio = async (chatMessageID: string | undefined) => {
    const newAudio = {
      storageKey: await uploadAudio(),
      type: 'AUDIO',
      chatMessageID,
      chatRoomID: chatRoom.chatRoom.id,
    };
    console.log('NEW ATTACHMENT: ', newAudio);

    const attachmentResult = (await API.graphql(
      graphqlOperation(createChatAttachment, {
        input: newAudio,
      })
    )) as { data: CreateChatAttachmentMutation };

    console.log('Attachment Result :', attachmentResult);
    // return attachmentResult;
    //  Send audio message

    //  const newAudioMsg = {
    //    chatRoomId: chatRoom.chatRoom.id,
    //    audio: key,
    //    userId: authedUser,
    //    forUserId: msgRecipient,
    //    status: "SENT",
    //    replyToMessageID: msgReplyingTo?.id,
    //  };
  };

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
      audio: 'AUDIO',
      video: 'VIDEO',
      document: 'DOCUMENT',
      location: 'LOCATION',
    };

    const newAttachMent = {
      storageKey: await uploadVidPic(file.uri),
      type: file.type ? types[file.type] : '',
      width: file.width,
      height: file.height,
      duration: file.duration,
      chatMessageID,
      chatRoomID: chatRoom.chatRoom.id,
    };
    console.log('NEW ATTACHMENT: ', newAttachMent);

    const attachmentResult = (await API.graphql(
      graphqlOperation(createChatAttachment, {
        input: newAttachMent,
      })
    )) as { data: CreateChatAttachmentMutation };

    console.log('Attachment Result :', attachmentResult);
    return attachmentResult;
  };

  const sendMsg = async () => {
    if (authedUser === chatRoom.chatRoom.users?.items[0]?.userId) {
      msgRecipient = chatRoom.chatRoom.users?.items[1]?.userId;
    } else {
      msgRecipient = chatRoom.chatRoom.users?.items[0]?.userId;
    }

    if (msgRecipient) {
      const newMsg = {
        chatRoomId: chatRoom.chatRoom.id,
        text,
        userId: authedUser,
        forUserId: msgRecipient,
        status: 'SENT',
        replyToMessageID: msgReplyingTo?.id,
      };

      const newMsgData = (await API.graphql(
        graphqlOperation(createChatMessage, { input: newMsg })
      )) as {
        data: CreateChatMessageMutation;
      };

      console.log('NEW MESSAGE DATA: ', newMsgData);

      setText('');
      if (vidpic) {
        console.log('Pictures/Videos from sendMsg function: ', vidpic);

        // create video and photo attachments

        console.log(' No of files: ', vidpic.length);

        await Promise.all(
          vidpic.map((file) =>
            addAttachment(file, newMsgData.data.createChatMessage?.id)
          )
        );

        setVidPics([]);
      }

      // if (soundURI) {
      if (uriSound !== null) {
        console.log('IF Uri Sound: ', uriSound);
        // Create audio attachments.
        await sendAudio(newMsgData.data.createChatMessage?.id);
        // setSoundURI(null);
        dispatch(setSoundURI({ uri: '' }));
      }

      (await API.graphql(
        graphqlOperation(updateChatRoom, {
          input: {
            id: chatRoom.chatRoom.id,
            chatRoomLastMessageId: newMsgData.data?.createChatMessage?.id,
          },
        })
      )) as { data: UpdateChatRoomMutation };

      console.log(' New Msg Sent Response: ', newMsgData);
    }
    setIsEmojiPickerOpen(false);
  };
  const onPress = () => {
    if (text || vidpic?.length > 0 || uriSound) {
      //  Send Message
      sendMsg();
    }
  };
  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.root, { height: isEmojiPickerOpen ? '50%' : 'auto' }]}
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
      {/* {soundURI && <AudioPlayer soundURI={soundURI} />} */}
      {/* {uriSound && <AudioPlayer soundURI={uriSound} />} */}

      {uriSound && (
        <View style={styles.attachmentsContainer}>
          <>
            {/* <Image
                  source={{ uri: item.uri }}
                  style={styles.selectedImage}
                  resizeMode='contain'
                /> */}
            {audioUploadProgress && (
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
                  {(audioUploadProgress.uri * 100).toFixed(0)}%
                </Text>
              </View>
            )}
            {/* <MaterialIcons
                  name='highlight-remove'
                  onPress={() =>
                    setVidPics((existingVidPic) =>
                      existingVidPic.filter((file) => file !== item)
                    )
                  }
                  size={20}
                  color='gray'
                  style={styles.removeSelectedImage}
                /> */}
          </>
        </View>
      )}

      <BottomSheet ref={bottomSheetRef} onAction={sendMsg} />
      {/* <Animated.View
        style={[styles.recordingBackground, AnimatedStyles.swipeStyles]}
      > */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() =>
              setIsEmojiPickerOpen((currentValue) => !currentValue)
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
          {/* <TouchableOpacity onPress={pickImage}> */}
          <TouchableOpacity onPress={pickImage}>
            <Feather
              name='image'
              size={26}
              color='#595959'
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
          {/* <TouchableOpacity
            onPressIn={startRecording}
            onPressOut={stopRecording}
          >
            <MaterialCommunityIcons
              name={recording ? 'microphone' : 'microphone-outline'}
              size={26}
              color={recording ? 'red' : '#595959'}
              style={styles.icon}
            />
          </TouchableOpacity> */}
        </View>

        {/* <Animated.View
          style={[styles.buttonContainer, { width: recBtn, height: recBtn }]}
        >
        
          <TouchableOpacity
            onPress={onPress}
            onPressIn={startRecording}
            onPressOut={stopRecording}
            // style={styles.buttonContainer}
          >
            {text || vidpic?.length > 0 || soundURI ? (
              <Ionicons name='send' size={18} color='white' />
            ) : (
              // <AntDesign name='plus' size={24} color='white' />

              <MaterialCommunityIcons
                name={recording ? 'microphone' : 'microphone-outline'}
                size={28}
                color={recording ? 'red' : 'white'}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        </Animated.View> */}
        <View
          style={{
            width: 50,
            // height: pickLockedRecHeight,
            // backgroundColor: yellowOpacity,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
        >
          {/* <PanGestureHandler onGestureEvent={handleGestureEvent}>
              <Animated.View
                style={[
                  {
                    position: 'absolute',
                    width: 45,
                    height: 45,
                    backgroundColor: 'blue',
                    bottom: 2,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  AnimatedStyles.swipeStyles,
                ]}
              > */}
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 45,
              height: 45,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 2,
            }}
            // onPress={text ? () => onPress : openBottomSheet}
            onPress={onPress}
            // onLongPress={() => openBottomSheet}
          >
            {text || vidpic?.length > 0 ? (
              <Ionicons name='send' size={18} color='white' />
            ) : (
              <MaterialCommunityIcons
                name={recording ? 'microphone' : 'microphone-outline'}
                size={28}
                color={recording ? 'red' : 'white'}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          {/* </Animated.View>
            </PanGestureHandler> */}
        </View>

        {/* <TouchableOpacity
          onPress={onPress}
          onPressIn={startRecording}
          onPressOut={stopRecording}
          // style={styles.buttonContainer}
        >
          {text || vidpic?.length > 0 || soundURI ? (
            <View style={[styles.buttonContainer]}>
              <Ionicons name='send' size={18} color='white' />
            </View>
          ) : (
            // <AntDesign name='plus' size={24} color='white' />
            <Animated.View
              style={[
                styles.buttonContainer,
                { width: recBtn, height: recBtn },
              ]}
            >
              <MaterialCommunityIcons
                name={recording ? 'microphone' : 'microphone-outline'}
                size={28}
                color={recording ? 'red' : 'white'}
                style={styles.icon}
              />
            </Animated.View>
          )}
        </TouchableOpacity> */}
      </View>
      {/* </Animated.View> */}

      {isEmojiPickerOpen && (
        <EmojiSelector
          onEmojiSelected={(emoji) =>
            setText((currentMessage) => currentMessage + emoji)
          }
          columns={8}
        />
      )}
    </SafeAreaView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
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
