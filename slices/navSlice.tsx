import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatMessage } from '@/src/API';
import { Audio } from 'expo-av';
import { Contact } from 'expo-contacts';
import { contactsInput, User } from '@/src/API';
// interface RootState {
//   loggedIn: boolean;
//   session: boolean;
//   user_Redux?: {
//     _deleted?: string;
//     _lastChangedAt?: string;
//     _version?: number | null;
//     createdAt?: string;
//     email?: string;
//     id?: string;
//     updatedAt?: string;
//     username?: string;
//     chatStatus?: string;
//     chatImage?: string;
//     publicKey?: string;
//   };
//   chatProImgS3Key?: string;
//   chatProfileImage?: string;
//   chatProfileName?: string;
//   chatProfileBio?: string;
//   chatRoom_Redux?: string | null;
//   // allContacts_Redux: [];
// }
// const initialState: RootState = {
let initialState = {
  loggedIn: false,
  email: '',
  confirmingEmail: false,
  msgReplyingTo: {} as ChatMessage | null,
  soundURI: '',
  isRecording: {} as Audio.Recording | null,
  // contacts: [] as string[], Array< contactsInput | null >
  regdContacts: [] as User[] | undefined,
  contacts: [] as contactsInput[],
  newMessages: {} as ChatMessage | null,
  recBtnPressedIn: false,
  session: false,
  userId: '',
  user_Redux: {
    _deleted: '',
    _lastChangedAt: '',
    _version: null,
    createdAt: '',
    email: '',
    id: '',
    updatedAt: '',
    username: '',
    chatStatus: '',
    chatImage: '',
    publicKey: '',
  },
  chatProImgS3Key: '',
  chatProfileImage: '',
  chatProfileName: '',
  chatProfileBio: '',
  chatRoom_Redux: null,
  // allContacts_Redux: [],
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setMsgReplyingTo: (
      state,
      action: PayloadAction<{ msg: ChatMessage | null }>
    ) => {
      state.msgReplyingTo = action.payload.msg;
    },
    removeMsgReplyingTo: (state) => {
      state.msgReplyingTo = null;
    },
    setLoggedIn: (state, action: PayloadAction<{ loggedIn: boolean }>) => {
      // console.log('Logged in payload : ', action.payload);
      if (action.payload.loggedIn === true) {
        state.loggedIn = true;
        // console.log('Logged in state after update :', state.loggedIn);
      } else state.loggedIn = false;
      // console.log('Logged in state after update :', state.loggedIn);
    },
    setNewMessage: (
      state,
      action: PayloadAction<{ newMsg: ChatMessage | null }>
    ) => {
      state.newMessages = action.payload.newMsg;
    },
    setIsRecording: (
      state,
      action: PayloadAction<{ rec: Audio.Recording | null }>
    ) => {
      state.isRecording = action.payload.rec;
    },
    setSoundURI: (state, action: PayloadAction<{ uri: string }>) => {
      state.soundURI = action.payload.uri;
    },
    setRecBtnPressedIn: (
      state,
      action: PayloadAction<{ recBtnPressedIn: boolean }>
    ) => {
      if (action.payload.recBtnPressedIn === true) {
        state.recBtnPressedIn = true;
      } else state.recBtnPressedIn = false;
    },
    setUserId: (state, action: PayloadAction<{ userId: string }>) => {
      state.userId = action.payload.userId;
    },
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setConfirmingEmail: (
      state,
      action: PayloadAction<{ confirmingEmail: boolean }>
    ) => {
      state.confirmingEmail = action.payload.confirmingEmail;
    },
    setContacts: (
      state,
      action: PayloadAction<{ digits: contactsInput[] }>
    ) => {
      state.contacts = action.payload.digits;
    },
    setRegdContacts: (state, action: PayloadAction<{ users: User[] }>) => {
      state.regdContacts = action.payload.users;
    },
    setSession: (state, action) => {
      if (action.payload) {
        state.session = action.payload;
      }
    },
    setReduxUser: (state, action) => {
      console.log('SET-REDUX-USER DISPATCH PAYLOAD B4 UPDATE:', action.payload);
      const currentAppUser = action.payload;
      state.user_Redux = {
        _deleted: currentAppUser._deleted,
        _lastChangedAt: currentAppUser._lastChangedAt,
        _version: currentAppUser._version,
        createdAt: currentAppUser.createdAt,
        email: currentAppUser.email,
        id: currentAppUser.id,
        updatedAt: currentAppUser.email,
        username: currentAppUser.username,
        chatStatus: currentAppUser.chatStatus,
        chatImage: currentAppUser.chatImage,
        publicKey: currentAppUser.publicKey,
      };
      console.log(' USER-REDUX AFTER DISPATCH', state.user_Redux);
    },

    setChatProImgS3Key: (state, action) => {
      // console.log('Chat Pro Img S3 Key: ', action.payload);
      state.chatProImgS3Key = action.payload;
    },
    setChatProfileImage: (state, action) => {
      state.chatProfileImage = action.payload;
      console.log('State.Image: ', state.chatProfileImage);
      // state.user_Redux = {
      //   ...state.user_Redux,
      //   chatImage: action.payload,
      // };
      // console.log('Updated Avatar: ', state.user_Redux.chatImage);
    },
    setChatProfileName: (state, action) => {
      console.log('Action Payload: ', action.payload);
      // console.log('Username before update :', state.user_Redux.username);
      state.chatProfileName = action.payload;
      // console.log('State.pName: ', state.chatProfileName);

      // state.user_Redux = {
      //   ...state.user_Redux,
      //   username: action.payload,
      // };
      // console.log('Username after update :', state.user_Redux.username);
    },
    setChatProfileBio: (state, action) => {
      // console.log('Chat Profile Bio: ', action.payload);
      state.chatProfileBio = action.payload;
      // console.log('State.Bio: ', state.chatProfileBio);
    },
    setReduxChatRoom: (state, action) => {
      state.chatRoom_Redux = action.payload;
    },
    // setReduxAllChatUsers: (state, action) => {
    //   const contactUser = action.payload;
    //   state.allContacts_Redux = [...state.allContacts_Redux, contactUser];
    // },
  },
});

export const {
  setMsgReplyingTo,
  removeMsgReplyingTo,
  setLoggedIn,
  setSoundURI,
  setIsRecording,
  setRecBtnPressedIn,
  setUserId,
  setEmail,
  setConfirmingEmail,
  setContacts,
  setRegdContacts,
  setSession,
  setReduxUser,
  setReduxChatRoom,
  setNewMessage,
  // setReduxAllChatUsers,
  setChatProImgS3Key,
  setChatProfileImage,
  setChatProfileName,
  setChatProfileBio,
} = navSlice.actions;

// Selectors
// export const selectLoggedIn = (state) => state.nav.loggedIn;
// export const selectSession = (state) => state.session;
// export const selectUser_Redux = (state) => state.user_Redux;
// export const selectChatProfileName = (state) =>
//   state.chatProfileName;
// export const selectChatRoom_Redux = (state) => state.chatRoom_Redux;
// export const selectChatProfileBio = (state) => state.chatProfileBio;
// export const selectChatProImgS3Key = (state) =>
//   state.chatProImgS3Key;

export default navSlice.reducer;
