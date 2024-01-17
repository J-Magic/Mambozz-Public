import { MessageType, AttachmentType, MessageStatus } from '@/src/API';

export type User = {
  __typename: 'User';
  id: string;
  username: string;
  phoneNumber: string;
  chatStatus?: string | null;
  chatImage?: string | null;
  chatRooms?: {
    __typename: 'ModelChatRoomUsersConnection';
    items: Array<{
      __typename: 'ChatRoomUsers';
      id: string;
      chatRoom: {
        __typename: 'ChatRoom';
        id: string;
        users?: {
          __typename: 'ModelChatRoomUsersConnection';
          items: Array<{
            __typename: 'ChatRoomUsers';
            id: string;
            user: {
              __typename: 'User';
              id: string;
            };
          } | null>;
          nextToken?: string | null;
        } | null;
      };
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  lastOnlineAt?: number | null;
  adminRightsId?: string | null;
  publicKey?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};
// export type User = {
//   __typename: 'User';
//   id: string;
//   username: string;
//   phoneNumber: string;
//   codelessNumber?: string | null;
//   numbers?: {
//     __typename: 'ModelContactConnection';
//     items: Array<{
//       __typename: 'Contact';
//       number: string;
//       createdAt: string;
//       updatedAt: string;
//       userNumbersId?: string | null;
//       owner?: string | null;
//     } | null>;
//     nextToken?: string | null;
//   } | null;
//   email?: string | null;
//   chatStatus?: string | null;
//   chatImage?: string | null;
//   imageKey?: string | null;
//   chatMessages?: {
//     __typename: 'ModelChatMessageConnection';
//     items: Array<{
//       __typename: 'ChatMessage';
//       id: string;
//       createdAt: string;
//       type?: MessageType | null;
//       text?: string | null;
//       userId: string;
//       chatRoomId: string;
//       chatAttachments?: {
//         __typename: 'ModelChatAttachmentConnection';
//         items: Array<{
//           __typename: 'ChatAttachment';
//           id: string;
//           chatMessageID?: string | null;
//           chatRoomID?: string | null;
//           storageKey: string;
//           type: AttachmentType;
//           width?: number | null;
//           height?: number | null;
//           duration?: number | null;
//           createdAt: string;
//           updatedAt: string;
//           owner?: string | null;
//         } | null>;
//         nextToken?: string | null;
//       } | null;
//       status?: MessageStatus | null;
//       replyToMessageID?: string | null;
//       forUserId?: string | null;
//       updatedAt: string;
//       owner?: string | null;
//     } | null>;
//     nextToken?: string | null;
//   } | null;
//   chatRooms?: {
//     __typename: 'ModelChatRoomUsersConnection';
//     items: Array<{
//       __typename: 'ChatRoomUsers';
//       id: string;
//       userId: string;
//       chatRoomId: string;
//       user: {
//         __typename: 'User';
//         id: string;
//         username: string;
//         phoneNumber: string;
//         codelessNumber?: string | null;
//         numbers?: {
//           __typename: 'ModelContactConnection';
//           items: Array<{
//             __typename: 'Contact';
//             number: string;
//             createdAt: string;
//             updatedAt: string;
//             userNumbersId?: string | null;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         email?: string | null;
//         chatStatus?: string | null;
//         chatImage?: string | null;
//         imageKey?: string | null;
//         chatMessages?: {
//           __typename: 'ModelChatMessageConnection';
//           items: Array<{
//             __typename: 'ChatMessage';
//             id: string;
//             createdAt: string;
//             type?: MessageType | null;
//             text?: string | null;
//             userId: string;
//             chatRoomId: string;
//             chatAttachments?: {
//               __typename: 'ModelChatAttachmentConnection';
//               items: Array<{
//                 __typename: 'ChatAttachment';
//                 id: string;
//                 chatMessageID?: string | null;
//                 chatRoomID?: string | null;
//                 storageKey: string;
//                 type: AttachmentType;
//                 width?: number | null;
//                 height?: number | null;
//                 duration?: number | null;
//                 createdAt: string;
//                 updatedAt: string;
//                 owner?: string | null;
//               } | null>;
//               nextToken?: string | null;
//             } | null;
//             status?: MessageStatus | null;
//             replyToMessageID?: string | null;
//             forUserId?: string | null;
//             updatedAt: string;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         chatRooms?: {
//           __typename: 'ModelChatRoomUsersConnection';
//           items: Array<{
//             __typename: 'ChatRoomUsers';
//             id: string;
//             userId: string;
//             chatRoomId: string;
//             user: {
//               __typename: 'User';
//               id: string;
//               username: string;
//               phoneNumber: string;
//               codelessNumber?: string | null;
//               numbers?: {
//                 __typename: 'ModelContactConnection';
//                 items: Array<{
//                   __typename: 'Contact';
//                   number: string;
//                   createdAt: string;
//                   updatedAt: string;
//                   userNumbersId?: string | null;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               email?: string | null;
//               chatStatus?: string | null;
//               chatImage?: string | null;
//               imageKey?: string | null;
//               chatMessages?: {
//                 __typename: 'ModelChatMessageConnection';
//                 items: Array<{
//                   __typename: 'ChatMessage';
//                   id: string;
//                   createdAt: string;
//                   type?: MessageType | null;
//                   text?: string | null;
//                   userId: string;
//                   chatRoomId: string;
//                   chatAttachments?: {
//                     __typename: 'ModelChatAttachmentConnection';
//                     nextToken?: string | null;
//                   } | null;
//                   status?: MessageStatus | null;
//                   replyToMessageID?: string | null;
//                   forUserId?: string | null;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               chatRooms?: {
//                 __typename: 'ModelChatRoomUsersConnection';
//                 items: Array<{
//                   __typename: 'ChatRoomUsers';
//                   id: string;
//                   userId: string;
//                   chatRoomId: string;
//                   user: {
//                     __typename: 'User';
//                     id: string;
//                     username: string;
//                     phoneNumber: string;
//                     codelessNumber?: string | null;
//                     email?: string | null;
//                     chatStatus?: string | null;
//                     chatImage?: string | null;
//                     imageKey?: string | null;
//                     lastOnlineAt?: number | null;
//                     adminRightsId?: string | null;
//                     publicKey?: string | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   };
//                   chatRoom: {
//                     __typename: 'ChatRoom';
//                     id: string;
//                     adminRightsId?: string | null;
//                     name?: string | null;
//                     image?: string | null;
//                     newMessages?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     chatRoomLastMessageId?: string | null;
//                     owner?: string | null;
//                   };
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               lastOnlineAt?: number | null;
//               adminRightsId?: string | null;
//               publicKey?: string | null;
//               createdAt: string;
//               updatedAt: string;
//               owner?: string | null;
//             };
//             chatRoom: {
//               __typename: 'ChatRoom';
//               id: string;
//               adminRightsId?: string | null;
//               name?: string | null;
//               image?: string | null;
//               users?: {
//                 __typename: 'ModelChatRoomUsersConnection';
//                 items: Array<{
//                   __typename: 'ChatRoomUsers';
//                   id: string;
//                   userId: string;
//                   chatRoomId: string;
//                   user: {
//                     __typename: 'User';
//                     id: string;
//                     username: string;
//                     phoneNumber: string;
//                     codelessNumber?: string | null;
//                     email?: string | null;
//                     chatStatus?: string | null;
//                     chatImage?: string | null;
//                     imageKey?: string | null;
//                     lastOnlineAt?: number | null;
//                     adminRightsId?: string | null;
//                     publicKey?: string | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   };
//                   chatRoom: {
//                     __typename: 'ChatRoom';
//                     id: string;
//                     adminRightsId?: string | null;
//                     name?: string | null;
//                     image?: string | null;
//                     newMessages?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     chatRoomLastMessageId?: string | null;
//                     owner?: string | null;
//                   };
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               chatMessages?: {
//                 __typename: 'ModelChatMessageConnection';
//                 items: Array<{
//                   __typename: 'ChatMessage';
//                   id: string;
//                   createdAt: string;
//                   type?: MessageType | null;
//                   text?: string | null;
//                   userId: string;
//                   chatRoomId: string;
//                   chatAttachments?: {
//                     __typename: 'ModelChatAttachmentConnection';
//                     nextToken?: string | null;
//                   } | null;
//                   status?: MessageStatus | null;
//                   replyToMessageID?: string | null;
//                   forUserId?: string | null;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               newMessages?: number | null;
//               lastMessage?: {
//                 __typename: 'ChatMessage';
//                 id: string;
//                 createdAt: string;
//                 type?: MessageType | null;
//                 text?: string | null;
//                 userId: string;
//                 chatRoomId: string;
//                 chatAttachments?: {
//                   __typename: 'ModelChatAttachmentConnection';
//                   items: Array<{
//                     __typename: 'ChatAttachment';
//                     id: string;
//                     chatMessageID?: string | null;
//                     chatRoomID?: string | null;
//                     storageKey: string;
//                     type: AttachmentType;
//                     width?: number | null;
//                     height?: number | null;
//                     duration?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   } | null>;
//                   nextToken?: string | null;
//                 } | null;
//                 status?: MessageStatus | null;
//                 replyToMessageID?: string | null;
//                 forUserId?: string | null;
//                 updatedAt: string;
//                 owner?: string | null;
//               } | null;
//               chatAttachments?: {
//                 __typename: 'ModelChatAttachmentConnection';
//                 items: Array<{
//                   __typename: 'ChatAttachment';
//                   id: string;
//                   chatMessageID?: string | null;
//                   chatRoomID?: string | null;
//                   storageKey: string;
//                   type: AttachmentType;
//                   width?: number | null;
//                   height?: number | null;
//                   duration?: number | null;
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               createdAt: string;
//               updatedAt: string;
//               chatRoomLastMessageId?: string | null;
//               owner?: string | null;
//             };
//             createdAt: string;
//             updatedAt: string;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         lastOnlineAt?: number | null;
//         adminRightsId?: string | null;
//         publicKey?: string | null;
//         createdAt: string;
//         updatedAt: string;
//         owner?: string | null;
//       };
//       chatRoom: {
//         __typename: 'ChatRoom';
//         id: string;
//         adminRightsId?: string | null;
//         name?: string | null;
//         image?: string | null;
//         users?: {
//           __typename: 'ModelChatRoomUsersConnection';
//           items: Array<{
//             __typename: 'ChatRoomUsers';
//             id: string;
//             userId: string;
//             chatRoomId: string;
//             user: {
//               __typename: 'User';
//               id: string;
//               username: string;
//               phoneNumber: string;
//               codelessNumber?: string | null;
//               numbers?: {
//                 __typename: 'ModelContactConnection';
//                 items: Array<{
//                   __typename: 'Contact';
//                   number: string;
//                   createdAt: string;
//                   updatedAt: string;
//                   userNumbersId?: string | null;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               email?: string | null;
//               chatStatus?: string | null;
//               chatImage?: string | null;
//               imageKey?: string | null;
//               chatMessages?: {
//                 __typename: 'ModelChatMessageConnection';
//                 items: Array<{
//                   __typename: 'ChatMessage';
//                   id: string;
//                   createdAt: string;
//                   type?: MessageType | null;
//                   text?: string | null;
//                   userId: string;
//                   chatRoomId: string;
//                   chatAttachments?: {
//                     __typename: 'ModelChatAttachmentConnection';
//                     nextToken?: string | null;
//                   } | null;
//                   status?: MessageStatus | null;
//                   replyToMessageID?: string | null;
//                   forUserId?: string | null;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               chatRooms?: {
//                 __typename: 'ModelChatRoomUsersConnection';
//                 items: Array<{
//                   __typename: 'ChatRoomUsers';
//                   id: string;
//                   userId: string;
//                   chatRoomId: string;
//                   user: {
//                     __typename: 'User';
//                     id: string;
//                     username: string;
//                     phoneNumber: string;
//                     codelessNumber?: string | null;
//                     email?: string | null;
//                     chatStatus?: string | null;
//                     chatImage?: string | null;
//                     imageKey?: string | null;
//                     lastOnlineAt?: number | null;
//                     adminRightsId?: string | null;
//                     publicKey?: string | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   };
//                   chatRoom: {
//                     __typename: 'ChatRoom';
//                     id: string;
//                     adminRightsId?: string | null;
//                     name?: string | null;
//                     image?: string | null;
//                     newMessages?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     chatRoomLastMessageId?: string | null;
//                     owner?: string | null;
//                   };
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               lastOnlineAt?: number | null;
//               adminRightsId?: string | null;
//               publicKey?: string | null;
//               createdAt: string;
//               updatedAt: string;
//               owner?: string | null;
//             };
//             chatRoom: {
//               __typename: 'ChatRoom';
//               id: string;
//               adminRightsId?: string | null;
//               name?: string | null;
//               image?: string | null;
//               users?: {
//                 __typename: 'ModelChatRoomUsersConnection';
//                 items: Array<{
//                   __typename: 'ChatRoomUsers';
//                   id: string;
//                   userId: string;
//                   chatRoomId: string;
//                   user: {
//                     __typename: 'User';
//                     id: string;
//                     username: string;
//                     phoneNumber: string;
//                     codelessNumber?: string | null;
//                     email?: string | null;
//                     chatStatus?: string | null;
//                     chatImage?: string | null;
//                     imageKey?: string | null;
//                     lastOnlineAt?: number | null;
//                     adminRightsId?: string | null;
//                     publicKey?: string | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   };
//                   chatRoom: {
//                     __typename: 'ChatRoom';
//                     id: string;
//                     adminRightsId?: string | null;
//                     name?: string | null;
//                     image?: string | null;
//                     newMessages?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     chatRoomLastMessageId?: string | null;
//                     owner?: string | null;
//                   };
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               chatMessages?: {
//                 __typename: 'ModelChatMessageConnection';
//                 items: Array<{
//                   __typename: 'ChatMessage';
//                   id: string;
//                   createdAt: string;
//                   type?: MessageType | null;
//                   text?: string | null;
//                   userId: string;
//                   chatRoomId: string;
//                   chatAttachments?: {
//                     __typename: 'ModelChatAttachmentConnection';
//                     nextToken?: string | null;
//                   } | null;
//                   status?: MessageStatus | null;
//                   replyToMessageID?: string | null;
//                   forUserId?: string | null;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               newMessages?: number | null;
//               lastMessage?: {
//                 __typename: 'ChatMessage';
//                 id: string;
//                 createdAt: string;
//                 type?: MessageType | null;
//                 text?: string | null;
//                 userId: string;
//                 chatRoomId: string;
//                 chatAttachments?: {
//                   __typename: 'ModelChatAttachmentConnection';
//                   items: Array<{
//                     __typename: 'ChatAttachment';
//                     id: string;
//                     chatMessageID?: string | null;
//                     chatRoomID?: string | null;
//                     storageKey: string;
//                     type: AttachmentType;
//                     width?: number | null;
//                     height?: number | null;
//                     duration?: number | null;
//                     createdAt: string;
//                     updatedAt: string;
//                     owner?: string | null;
//                   } | null>;
//                   nextToken?: string | null;
//                 } | null;
//                 status?: MessageStatus | null;
//                 replyToMessageID?: string | null;
//                 forUserId?: string | null;
//                 updatedAt: string;
//                 owner?: string | null;
//               } | null;
//               chatAttachments?: {
//                 __typename: 'ModelChatAttachmentConnection';
//                 items: Array<{
//                   __typename: 'ChatAttachment';
//                   id: string;
//                   chatMessageID?: string | null;
//                   chatRoomID?: string | null;
//                   storageKey: string;
//                   type: AttachmentType;
//                   width?: number | null;
//                   height?: number | null;
//                   duration?: number | null;
//                   createdAt: string;
//                   updatedAt: string;
//                   owner?: string | null;
//                 } | null>;
//                 nextToken?: string | null;
//               } | null;
//               createdAt: string;
//               updatedAt: string;
//               chatRoomLastMessageId?: string | null;
//               owner?: string | null;
//             };
//             createdAt: string;
//             updatedAt: string;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         chatMessages?: {
//           __typename: 'ModelChatMessageConnection';
//           items: Array<{
//             __typename: 'ChatMessage';
//             id: string;
//             createdAt: string;
//             type?: MessageType | null;
//             text?: string | null;
//             userId: string;
//             chatRoomId: string;
//             chatAttachments?: {
//               __typename: 'ModelChatAttachmentConnection';
//               items: Array<{
//                 __typename: 'ChatAttachment';
//                 id: string;
//                 chatMessageID?: string | null;
//                 chatRoomID?: string | null;
//                 storageKey: string;
//                 type: AttachmentType;
//                 width?: number | null;
//                 height?: number | null;
//                 duration?: number | null;
//                 createdAt: string;
//                 updatedAt: string;
//                 owner?: string | null;
//               } | null>;
//               nextToken?: string | null;
//             } | null;
//             status?: MessageStatus | null;
//             replyToMessageID?: string | null;
//             forUserId?: string | null;
//             updatedAt: string;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         newMessages?: number | null;
//         lastMessage?: {
//           __typename: 'ChatMessage';
//           id: string;
//           createdAt: string;
//           type?: MessageType | null;
//           text?: string | null;
//           userId: string;
//           chatRoomId: string;
//           chatAttachments?: {
//             __typename: 'ModelChatAttachmentConnection';
//             items: Array<{
//               __typename: 'ChatAttachment';
//               id: string;
//               chatMessageID?: string | null;
//               chatRoomID?: string | null;
//               storageKey: string;
//               type: AttachmentType;
//               width?: number | null;
//               height?: number | null;
//               duration?: number | null;
//               createdAt: string;
//               updatedAt: string;
//               owner?: string | null;
//             } | null>;
//             nextToken?: string | null;
//           } | null;
//           status?: MessageStatus | null;
//           replyToMessageID?: string | null;
//           forUserId?: string | null;
//           updatedAt: string;
//           owner?: string | null;
//         } | null;
//         chatAttachments?: {
//           __typename: 'ModelChatAttachmentConnection';
//           items: Array<{
//             __typename: 'ChatAttachment';
//             id: string;
//             chatMessageID?: string | null;
//             chatRoomID?: string | null;
//             storageKey: string;
//             type: AttachmentType;
//             width?: number | null;
//             height?: number | null;
//             duration?: number | null;
//             createdAt: string;
//             updatedAt: string;
//             owner?: string | null;
//           } | null>;
//           nextToken?: string | null;
//         } | null;
//         createdAt: string;
//         updatedAt: string;
//         chatRoomLastMessageId?: string | null;
//         owner?: string | null;
//       };
//       createdAt: string;
//       updatedAt: string;
//       owner?: string | null;
//     } | null>;
//     nextToken?: string | null;
//   } | null;
//   lastOnlineAt?: number | null;
//   adminRightsId?: string | null;
//   publicKey?: string | null;
//   createdAt: string;
//   updatedAt: string;
//   owner?: string | null;
// };

export type ChatRoomUsers = {
  __typename: 'ChatRoomUsers';
  id: string;
  userId: string;
  chatRoomId: string;
  user: {
    __typename: 'User';
    id: string;
    username: string;
    phoneNumber: string;
    numbers?: {
      __typename: 'ModelContactConnection';
      items: Array<{
        __typename: 'Contact';
        number: string;
        createdAt: string;
        updatedAt: string;
        userNumbersId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    email?: string | null;
    chatStatus?: string | null;
    chatImage?: string | null;
    imageKey?: string | null;
    chatMessages?: {
      __typename: 'ModelChatMessageConnection';
      items: Array<{
        __typename: 'ChatMessage';
        id: string;
        createdAt: string;
        type?: MessageType | null;
        text?: string | null;
        userId: string;
        chatRoomId: string;
        chatAttachments?: {
          __typename: 'ModelChatAttachmentConnection';
          items: Array<{
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
            owner?: string | null;
          } | null>;
          nextToken?: string | null;
        } | null;
        status?: MessageStatus | null;
        replyToMessageID?: string | null;
        forUserId?: string | null;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    chatRooms?: {
      __typename: 'ModelChatRoomUsersConnection';
      items: Array<{
        __typename: 'ChatRoomUsers';
        id: string;
        userId: string;
        chatRoomId: string;
        user: {
          __typename: 'User';
          id: string;
          username: string;
          phoneNumber: string;
          numbers?: {
            __typename: 'ModelContactConnection';
            items: Array<{
              __typename: 'Contact';
              number: string;
              createdAt: string;
              updatedAt: string;
              userNumbersId?: string | null;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          email?: string | null;
          chatStatus?: string | null;
          chatImage?: string | null;
          imageKey?: string | null;
          chatMessages?: {
            __typename: 'ModelChatMessageConnection';
            items: Array<{
              __typename: 'ChatMessage';
              id: string;
              createdAt: string;
              type?: MessageType | null;
              text?: string | null;
              userId: string;
              chatRoomId: string;
              chatAttachments?: {
                __typename: 'ModelChatAttachmentConnection';
                nextToken?: string | null;
              } | null;
              status?: MessageStatus | null;
              replyToMessageID?: string | null;
              forUserId?: string | null;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          chatRooms?: {
            __typename: 'ModelChatRoomUsersConnection';
            items: Array<{
              __typename: 'ChatRoomUsers';
              id: string;
              userId: string;
              chatRoomId: string;
              user: {
                __typename: 'User';
                id: string;
                username: string;
                phoneNumber: string;
                email?: string | null;
                chatStatus?: string | null;
                chatImage?: string | null;
                imageKey?: string | null;
                lastOnlineAt?: number | null;
                adminRightsId?: string | null;
                publicKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
              };
              chatRoom: {
                __typename: 'ChatRoom';
                id: string;
                chatRoomId?: string | null;
                adminRightsId?: string | null;
                name?: string | null;
                image?: string | null;
                newMessages?: number | null;
                createdAt: string;
                updatedAt: string;
                chatRoomLastMessageId?: string | null;
                owner?: string | null;
              };
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          lastOnlineAt?: number | null;
          adminRightsId?: string | null;
          publicKey?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        chatRoom: {
          __typename: 'ChatRoom';
          id: string;
          chatRoomId?: string | null;
          adminRightsId?: string | null;
          name?: string | null;
          image?: string | null;
          users?: {
            __typename: 'ModelChatRoomUsersConnection';
            items: Array<{
              __typename: 'ChatRoomUsers';
              id: string;
              userId: string;
              chatRoomId: string;
              user: {
                __typename: 'User';
                id: string;
                username: string;
                phoneNumber: string;
                email?: string | null;
                chatStatus?: string | null;
                chatImage?: string | null;
                imageKey?: string | null;
                lastOnlineAt?: number | null;
                adminRightsId?: string | null;
                publicKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
              };
              chatRoom: {
                __typename: 'ChatRoom';
                id: string;
                chatRoomId?: string | null;
                adminRightsId?: string | null;
                name?: string | null;
                image?: string | null;
                newMessages?: number | null;
                createdAt: string;
                updatedAt: string;
                chatRoomLastMessageId?: string | null;
                owner?: string | null;
              };
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          chatMessages?: {
            __typename: 'ModelChatMessageConnection';
            items: Array<{
              __typename: 'ChatMessage';
              id: string;
              createdAt: string;
              type?: MessageType | null;
              text?: string | null;
              userId: string;
              chatRoomId: string;
              chatAttachments?: {
                __typename: 'ModelChatAttachmentConnection';
                nextToken?: string | null;
              } | null;
              status?: MessageStatus | null;
              replyToMessageID?: string | null;
              forUserId?: string | null;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          newMessages?: number | null;
          lastMessage?: {
            __typename: 'ChatMessage';
            id: string;
            createdAt: string;
            type?: MessageType | null;
            text?: string | null;
            userId: string;
            chatRoomId: string;
            chatAttachments?: {
              __typename: 'ModelChatAttachmentConnection';
              items: Array<{
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
                owner?: string | null;
              } | null>;
              nextToken?: string | null;
            } | null;
            status?: MessageStatus | null;
            replyToMessageID?: string | null;
            forUserId?: string | null;
            updatedAt: string;
            owner?: string | null;
          } | null;
          chatAttachments?: {
            __typename: 'ModelChatAttachmentConnection';
            items: Array<{
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
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          chatRoomLastMessageId?: string | null;
          owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    lastOnlineAt?: number | null;
    adminRightsId?: string | null;
    publicKey?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  chatRoom: {
    __typename: 'ChatRoom';
    id: string;
    chatRoomId?: string | null;
    adminRightsId?: string | null;
    name?: string | null;
    image?: string | null;
    users?: {
      __typename: 'ModelChatRoomUsersConnection';
      items: Array<{
        __typename: 'ChatRoomUsers';
        id: string;
        userId: string;
        chatRoomId: string;
        user: {
          __typename: 'User';
          id: string;
          username: string;
          phoneNumber: string;
          numbers?: {
            __typename: 'ModelContactConnection';
            items: Array<{
              __typename: 'Contact';
              number: string;
              createdAt: string;
              updatedAt: string;
              userNumbersId?: string | null;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          email?: string | null;
          chatStatus?: string | null;
          chatImage?: string | null;
          imageKey?: string | null;
          chatMessages?: {
            __typename: 'ModelChatMessageConnection';
            items: Array<{
              __typename: 'ChatMessage';
              id: string;
              createdAt: string;
              type?: MessageType | null;
              text?: string | null;
              userId: string;
              chatRoomId: string;
              chatAttachments?: {
                __typename: 'ModelChatAttachmentConnection';
                nextToken?: string | null;
              } | null;
              status?: MessageStatus | null;
              replyToMessageID?: string | null;
              forUserId?: string | null;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          chatRooms?: {
            __typename: 'ModelChatRoomUsersConnection';
            items: Array<{
              __typename: 'ChatRoomUsers';
              id: string;
              userId: string;
              chatRoomId: string;
              user: {
                __typename: 'User';
                id: string;
                username: string;
                phoneNumber: string;
                email?: string | null;
                chatStatus?: string | null;
                chatImage?: string | null;
                imageKey?: string | null;
                lastOnlineAt?: number | null;
                adminRightsId?: string | null;
                publicKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
              };
              chatRoom: {
                __typename: 'ChatRoom';
                id: string;
                chatRoomId?: string | null;
                adminRightsId?: string | null;
                name?: string | null;
                image?: string | null;
                newMessages?: number | null;
                createdAt: string;
                updatedAt: string;
                chatRoomLastMessageId?: string | null;
                owner?: string | null;
              };
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          lastOnlineAt?: number | null;
          adminRightsId?: string | null;
          publicKey?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        chatRoom: {
          __typename: 'ChatRoom';
          id: string;
          chatRoomId?: string | null;
          adminRightsId?: string | null;
          name?: string | null;
          image?: string | null;
          users?: {
            __typename: 'ModelChatRoomUsersConnection';
            items: Array<{
              __typename: 'ChatRoomUsers';
              id: string;
              userId: string;
              chatRoomId: string;
              user: {
                __typename: 'User';
                id: string;
                username: string;
                phoneNumber: string;
                email?: string | null;
                chatStatus?: string | null;
                chatImage?: string | null;
                imageKey?: string | null;
                lastOnlineAt?: number | null;
                adminRightsId?: string | null;
                publicKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
              };
              chatRoom: {
                __typename: 'ChatRoom';
                id: string;
                chatRoomId?: string | null;
                adminRightsId?: string | null;
                name?: string | null;
                image?: string | null;
                newMessages?: number | null;
                createdAt: string;
                updatedAt: string;
                chatRoomLastMessageId?: string | null;
                owner?: string | null;
              };
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          chatMessages?: {
            __typename: 'ModelChatMessageConnection';
            items: Array<{
              __typename: 'ChatMessage';
              id: string;
              createdAt: string;
              type?: MessageType | null;
              text?: string | null;
              userId: string;
              chatRoomId: string;
              chatAttachments?: {
                __typename: 'ModelChatAttachmentConnection';
                nextToken?: string | null;
              } | null;
              status?: MessageStatus | null;
              replyToMessageID?: string | null;
              forUserId?: string | null;
              updatedAt: string;
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          newMessages?: number | null;
          lastMessage?: {
            __typename: 'ChatMessage';
            id: string;
            createdAt: string;
            type?: MessageType | null;
            text?: string | null;
            userId: string;
            chatRoomId: string;
            chatAttachments?: {
              __typename: 'ModelChatAttachmentConnection';
              items: Array<{
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
                owner?: string | null;
              } | null>;
              nextToken?: string | null;
            } | null;
            status?: MessageStatus | null;
            replyToMessageID?: string | null;
            forUserId?: string | null;
            updatedAt: string;
            owner?: string | null;
          } | null;
          chatAttachments?: {
            __typename: 'ModelChatAttachmentConnection';
            items: Array<{
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
              owner?: string | null;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          chatRoomLastMessageId?: string | null;
          owner?: string | null;
        };
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    chatMessages?: {
      __typename: 'ModelChatMessageConnection';
      items: Array<{
        __typename: 'ChatMessage';
        id: string;
        createdAt: string;
        type?: MessageType | null;
        text?: string | null;
        userId: string;
        chatRoomId: string;
        chatAttachments?: {
          __typename: 'ModelChatAttachmentConnection';
          items: Array<{
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
            owner?: string | null;
          } | null>;
          nextToken?: string | null;
        } | null;
        status?: MessageStatus | null;
        replyToMessageID?: string | null;
        forUserId?: string | null;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    newMessages?: number | null;
    lastMessage?: {
      __typename: 'ChatMessage';
      id: string;
      createdAt: string;
      type?: MessageType | null;
      text?: string | null;
      userId: string;
      chatRoomId: string;
      chatAttachments?: {
        __typename: 'ModelChatAttachmentConnection';
        items: Array<{
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
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
      } | null;
      status?: MessageStatus | null;
      replyToMessageID?: string | null;
      forUserId?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    chatAttachments?: {
      __typename: 'ModelChatAttachmentConnection';
      items: Array<{
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
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    chatRoomLastMessageId?: string | null;
    owner?: string | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ChatRoom = {
  __typename: 'ChatRoom';
  id: string;
  chatRoomId?: string | null;
  adminRightsId?: string | null;
  name?: string | null;
  image?: string | null;
  users?: {
    __typename: 'ModelChatRoomUsersConnection';
    items: Array<{
      __typename: 'ChatRoomUsers';
      id: string;
      userId: string;
      chatRoomId: string;
      user: {
        __typename: 'User';
        id: string;
        username: string;
        phoneNumber: string;
        email?: string | null;
        chatStatus?: string | null;
        chatImage?: string | null;
        imageKey?: string | null;
        lastOnlineAt?: number | null;
        adminRightsId?: string | null;
        publicKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      };
      chatRoom: {
        __typename: 'ChatRoom';
        id: string;
        chatRoomId?: string | null;
        adminRightsId?: string | null;
        name?: string | null;
        image?: string | null;
        newMessages?: number | null;
        createdAt: string;
        updatedAt: string;
        chatRoomLastMessageId?: string | null;
        owner?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  chatMessages?: {
    __typename: 'ModelChatMessageConnection';
    items: Array<{
      __typename: 'ChatMessage';
      id: string;
      createdAt: string;
      type?: MessageType | null;
      text?: string | null;
      userId: string;
      chatRoomId: string;
      chatAttachments?: {
        __typename: 'ModelChatAttachmentConnection';
        nextToken?: string | null;
      } | null;
      status?: MessageStatus | null;
      replyToMessageID?: string | null;
      forUserId?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  newMessages?: number | null;
  lastMessage?: {
    __typename: 'ChatMessage';
    id: string;
    createdAt: string;
    type?: MessageType | null;
    text?: string | null;
    userId: string;
    chatRoomId: string;
    chatAttachments?: {
      __typename: 'ModelChatAttachmentConnection';
      items: Array<{
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
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    status?: MessageStatus | null;
    replyToMessageID?: string | null;
    forUserId?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
  chatAttachments?: {
    __typename: 'ModelChatAttachmentConnection';
    items: Array<{
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
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  chatRoomLastMessageId?: string | null;
  owner?: string | null;
};
