import { gql } from '@apollo/client';

// export const getUsersByNumbers = gql`
//   query GetUsersByNumbers($numbers: [contactsInput]!) {
//     getUsersByNumbers(numbers: $numbers) {
//       id
//       username
//       phoneNumber
//       chatImage
//     }
//   }
// `;

export const getUsersByNumbers = gql`
  query GetUsersByNumbers($numbers: [contactsInput]!) {
    getUsersByNumbers(numbers: $numbers) {
      id
      username
      phoneNumber
      chatImage
      chatStatus
    }
  }
`;

// export const getUsersByNumbers = gql`
//   query GetUsersByNumbers($numbers: [contactsInput]!) {
//     getUsersByNumbers(numbers: $numbers) {
//       id
//       username
//       phoneNumber
//       numbers {
//         items {
//           number
//           createdAt
//           updatedAt
//           userNumbersId
//           owner
//         }
//         nextToken
//       }
//       email
//       chatStatus
//       chatImage
//       imageKey
//       chatMessages {
//         items {
//           id
//           createdAt
//           type
//           text
//           userId
//           chatRoomId
//           chatAttachments {
//             items {
//               id
//               chatMessageID
//               chatRoomID
//               storageKey
//               type
//               width
//               height
//               duration
//               createdAt
//               updatedAt
//               owner
//             }
//             nextToken
//           }
//           status
//           replyToMessageID
//           forUserId
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       chatRooms {
//         items {
//           id
//           userId
//           chatRoomId
//           user {
//             id
//             username
//             phoneNumber
//             numbers {
//               items {
//                 number
//                 createdAt
//                 updatedAt
//                 userNumbersId
//                 owner
//               }
//               nextToken
//             }
//             email
//             chatStatus
//             chatImage
//             imageKey
//             chatMessages {
//               items {
//                 id
//                 createdAt
//                 type
//                 text
//                 userId
//                 chatRoomId
//                 chatAttachments {
//                   items {
//                     id
//                     chatMessageID
//                     chatRoomID
//                     storageKey
//                     type
//                     width
//                     height
//                     duration
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   nextToken
//                 }
//                 status
//                 replyToMessageID
//                 forUserId
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             chatRooms {
//               items {
//                 id
//                 userId
//                 chatRoomId
//                 user {
//                   id
//                   username
//                   phoneNumber
//                   numbers {
//                     items {
//                       number
//                       createdAt
//                       updatedAt
//                       userNumbersId
//                       owner
//                     }
//                     nextToken
//                   }
//                   email
//                   chatStatus
//                   chatImage
//                   imageKey
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatRooms {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   lastOnlineAt
//                   adminRightsId
//                   publicKey
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 chatRoom {
//                   id
//                   chatRoomId
//                   adminRightsId
//                   name
//                   image
//                   users {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   newMessages
//                   lastMessage {
//                     id
//                     createdAt
//                     type
//                     text
//                     userId
//                     chatRoomId
//                     chatAttachments {
//                       items {
//                         id
//                         chatMessageID
//                         chatRoomID
//                         storageKey
//                         type
//                         width
//                         height
//                         duration
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     status
//                     replyToMessageID
//                     forUserId
//                     updatedAt
//                     owner
//                   }
//                   chatAttachments {
//                     items {
//                       id
//                       chatMessageID
//                       chatRoomID
//                       storageKey
//                       type
//                       width
//                       height
//                       duration
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   createdAt
//                   updatedAt
//                   chatRoomLastMessageId
//                   owner
//                 }
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             lastOnlineAt
//             adminRightsId
//             publicKey
//             createdAt
//             updatedAt
//             owner
//           }
//           chatRoom {
//             id
//             chatRoomId
//             adminRightsId
//             name
//             image
//             users {
//               items {
//                 id
//                 userId
//                 chatRoomId
//                 user {
//                   id
//                   username
//                   phoneNumber
//                   numbers {
//                     items {
//                       number
//                       createdAt
//                       updatedAt
//                       userNumbersId
//                       owner
//                     }
//                     nextToken
//                   }
//                   email
//                   chatStatus
//                   chatImage
//                   imageKey
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatRooms {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   lastOnlineAt
//                   adminRightsId
//                   publicKey
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 chatRoom {
//                   id
//                   chatRoomId
//                   adminRightsId
//                   name
//                   image
//                   users {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   newMessages
//                   lastMessage {
//                     id
//                     createdAt
//                     type
//                     text
//                     userId
//                     chatRoomId
//                     chatAttachments {
//                       items {
//                         id
//                         chatMessageID
//                         chatRoomID
//                         storageKey
//                         type
//                         width
//                         height
//                         duration
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     status
//                     replyToMessageID
//                     forUserId
//                     updatedAt
//                     owner
//                   }
//                   chatAttachments {
//                     items {
//                       id
//                       chatMessageID
//                       chatRoomID
//                       storageKey
//                       type
//                       width
//                       height
//                       duration
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   createdAt
//                   updatedAt
//                   chatRoomLastMessageId
//                   owner
//                 }
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             chatMessages {
//               items {
//                 id
//                 createdAt
//                 type
//                 text
//                 userId
//                 chatRoomId
//                 chatAttachments {
//                   items {
//                     id
//                     chatMessageID
//                     chatRoomID
//                     storageKey
//                     type
//                     width
//                     height
//                     duration
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   nextToken
//                 }
//                 status
//                 replyToMessageID
//                 forUserId
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             newMessages
//             lastMessage {
//               id
//               createdAt
//               type
//               text
//               userId
//               chatRoomId
//               chatAttachments {
//                 items {
//                   id
//                   chatMessageID
//                   chatRoomID
//                   storageKey
//                   type
//                   width
//                   height
//                   duration
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               status
//               replyToMessageID
//               forUserId
//               updatedAt
//               owner
//             }
//             chatAttachments {
//               items {
//                 id
//                 chatMessageID
//                 chatRoomID
//                 storageKey
//                 type
//                 width
//                 height
//                 duration
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             createdAt
//             updatedAt
//             chatRoomLastMessageId
//             owner
//           }
//           createdAt
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       lastOnlineAt
//       adminRightsId
//       publicKey
//       createdAt
//       updatedAt
//       owner
//     }
//   }
// `;

// export const getUsersByNumbers = gql`
//   query GetUsersByNumbers($numbers: [contactsInput]!) {
//     getUsersByNumbers(numbers: $numbers) {
//       id
//       username
//       phoneNumber
//       chatStatus
//       chatImage
//       chatRooms {
//         items {
//           id
//           userId
//           chatRoomId
//           chatRoom {
//             id
//             users {
//               items {
//                 id
//                 user {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const listChatRooms = gql`
//   query GetUser($id: ID!) {
//     getUser(id: $id) {
//       id
//       chatRooms {
//         items {
//           chatRoom {
//             id
//             users {
//               items {
//                 user {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const listChatRooms = gql`
//   query GetUser($id: ID!) {
//     getUser(id: $id) {
//       id
//       chatRooms {
//         items {
//           chatRoom {
//             users {
//               items {
//                 user {
//                   id
//                 }
//               }
//               nextToken
//             }
//             id
//           }
//         }
//         nextToken
//       }
//     }
//   }
// `;

export const listChatRooms = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatRooms {
        items {
          chatRoom {
            id
            name
            image
            updatedAt
            users {
              items {
                user {
                  id
                  username
                  chatStatus
                  chatImage
                  lastOnlineAt
                }
              }
              nextToken
            }
            lastMessage {
              id
              createdAt
              text
            }
          }
        }
        nextToken
      }
    }
  }
`;

// export const listChatRooms = gql`
//   query GetUser($id: ID!) {
//     getUser(id: $id) {
//       id
//       username
//       phoneNumber
//       numbers {
//         items {
//           number
//           createdAt
//           updatedAt
//           userNumbersId
//           owner
//         }
//         nextToken
//       }
//       email
//       chatStatus
//       chatImage
//       imageKey
//       chatMessages {
//         items {
//           id
//           createdAt
//           type
//           text
//           userId
//           chatRoomId
//           chatAttachments {
//             items {
//               id
//               chatMessageID
//               chatRoomID
//               storageKey
//               type
//               width
//               height
//               duration
//               createdAt
//               updatedAt
//               owner
//             }
//             nextToken
//           }
//           status
//           replyToMessageID
//           forUserId
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       chatRooms {
//         items {
//           id
//           userId
//           chatRoomId
//           user {
//             id
//             username
//             phoneNumber
//             numbers {
//               items {
//                 number
//                 createdAt
//                 updatedAt
//                 userNumbersId
//                 owner
//               }
//               nextToken
//             }
//             email
//             chatStatus
//             chatImage
//             imageKey
//             chatMessages {
//               items {
//                 id
//                 createdAt
//                 type
//                 text
//                 userId
//                 chatRoomId
//                 chatAttachments {
//                   items {
//                     id
//                     chatMessageID
//                     chatRoomID
//                     storageKey
//                     type
//                     width
//                     height
//                     duration
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   nextToken
//                 }
//                 status
//                 replyToMessageID
//                 forUserId
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             chatRooms {
//               items {
//                 id
//                 userId
//                 chatRoomId
//                 user {
//                   id
//                   username
//                   phoneNumber
//                   numbers {
//                     items {
//                       number
//                       createdAt
//                       updatedAt
//                       userNumbersId
//                       owner
//                     }
//                     nextToken
//                   }
//                   email
//                   chatStatus
//                   chatImage
//                   imageKey
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatRooms {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   lastOnlineAt
//                   adminRightsId
//                   publicKey
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 chatRoom {
//                   id
//                   chatRoomId
//                   adminRightsId
//                   name
//                   image
//                   users {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   newMessages
//                   lastMessage {
//                     id
//                     createdAt
//                     type
//                     text
//                     userId
//                     chatRoomId
//                     chatAttachments {
//                       items {
//                         id
//                         chatMessageID
//                         chatRoomID
//                         storageKey
//                         type
//                         width
//                         height
//                         duration
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     status
//                     replyToMessageID
//                     forUserId
//                     updatedAt
//                     owner
//                   }
//                   chatAttachments {
//                     items {
//                       id
//                       chatMessageID
//                       chatRoomID
//                       storageKey
//                       type
//                       width
//                       height
//                       duration
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   createdAt
//                   updatedAt
//                   chatRoomLastMessageId
//                   owner
//                 }
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             lastOnlineAt
//             adminRightsId
//             publicKey
//             createdAt
//             updatedAt
//             owner
//           }
//           chatRoom {
//             id
//             chatRoomId
//             adminRightsId
//             name
//             image
//             users {
//               items {
//                 id
//                 userId
//                 chatRoomId
//                 user {
//                   id
//                   username
//                   phoneNumber
//                   numbers {
//                     items {
//                       number
//                       createdAt
//                       updatedAt
//                       userNumbersId
//                       owner
//                     }
//                     nextToken
//                   }
//                   email
//                   chatStatus
//                   chatImage
//                   imageKey
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatRooms {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   lastOnlineAt
//                   adminRightsId
//                   publicKey
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 chatRoom {
//                   id
//                   chatRoomId
//                   adminRightsId
//                   name
//                   image
//                   users {
//                     items {
//                       id
//                       userId
//                       chatRoomId
//                       user {
//                         id
//                         username
//                         phoneNumber
//                         email
//                         chatStatus
//                         chatImage
//                         imageKey
//                         lastOnlineAt
//                         adminRightsId
//                         publicKey
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       chatRoom {
//                         id
//                         chatRoomId
//                         adminRightsId
//                         name
//                         image
//                         newMessages
//                         createdAt
//                         updatedAt
//                         chatRoomLastMessageId
//                         owner
//                       }
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   chatMessages {
//                     items {
//                       id
//                       createdAt
//                       type
//                       text
//                       userId
//                       chatRoomId
//                       chatAttachments {
//                         nextToken
//                       }
//                       status
//                       replyToMessageID
//                       forUserId
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   newMessages
//                   lastMessage {
//                     id
//                     createdAt
//                     type
//                     text
//                     userId
//                     chatRoomId
//                     chatAttachments {
//                       items {
//                         id
//                         chatMessageID
//                         chatRoomID
//                         storageKey
//                         type
//                         width
//                         height
//                         duration
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     status
//                     replyToMessageID
//                     forUserId
//                     updatedAt
//                     owner
//                   }
//                   chatAttachments {
//                     items {
//                       id
//                       chatMessageID
//                       chatRoomID
//                       storageKey
//                       type
//                       width
//                       height
//                       duration
//                       createdAt
//                       updatedAt
//                       owner
//                     }
//                     nextToken
//                   }
//                   createdAt
//                   updatedAt
//                   chatRoomLastMessageId
//                   owner
//                 }
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             chatMessages {
//               items {
//                 id
//                 createdAt
//                 type
//                 text
//                 userId
//                 chatRoomId
//                 chatAttachments {
//                   items {
//                     id
//                     chatMessageID
//                     chatRoomID
//                     storageKey
//                     type
//                     width
//                     height
//                     duration
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   nextToken
//                 }
//                 status
//                 replyToMessageID
//                 forUserId
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             newMessages
//             lastMessage {
//               id
//               createdAt
//               type
//               text
//               userId
//               chatRoomId
//               chatAttachments {
//                 items {
//                   id
//                   chatMessageID
//                   chatRoomID
//                   storageKey
//                   type
//                   width
//                   height
//                   duration
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               status
//               replyToMessageID
//               forUserId
//               updatedAt
//               owner
//             }
//             chatAttachments {
//               items {
//                 id
//                 chatMessageID
//                 chatRoomID
//                 storageKey
//                 type
//                 width
//                 height
//                 duration
//                 createdAt
//                 updatedAt
//                 owner
//               }
//               nextToken
//             }
//             createdAt
//             updatedAt
//             chatRoomLastMessageId
//             owner
//           }
//           createdAt
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       lastOnlineAt
//       adminRightsId
//       publicKey
//       createdAt
//       updatedAt
//       owner
//     }
//   }
// `;

export const getChatRoom = gql`
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatRoomId
      adminRightsId
      name
      image
      users {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      newMessages
      lastMessage {
        id
        createdAt
        type
        text
        userId
        chatRoomId
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        status
        replyToMessageID
        forUserId
        updatedAt
        owner
      }
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
    }
  }
`;
export const listChatMessagesByChatRoom = gql`
  query ListChatMessagesByChatRoom(
    $chatRoomId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessagesByChatRoom(
      chatRoomId: $chatRoomId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        text
        userId
        chatRoomId
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        status
        replyToMessageID
        forUserId
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getIndividual_User = gql`
  query GetIndividual_User($UserID: ID!) {
    getIndividual_User(UserID: $UserID) {
      UserID
      currentBalance
      transactions {
        TransactionID
        category
        type
        transactionExecutorId
        transactionAmount
        currency
        forUserId
        createdAt
        status
      }
      chamas {
        GroupID
        groupName
        groupMembers {
          id
          username
          phoneNumber
          numbers {
            items {
              number
              createdAt
              updatedAt
              userNumbersId
              owner
            }
            nextToken
          }
          email
          chatStatus
          chatImage
          imageKey
          chatMessages {
            items {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            nextToken
          }
          chatRooms {
            items {
              id
              userId
              chatRoomId
              user {
                id
                username
                phoneNumber
                numbers {
                  items {
                    number
                    createdAt
                    updatedAt
                    userNumbersId
                    owner
                  }
                  nextToken
                }
                email
                chatStatus
                chatImage
                imageKey
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatRooms {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                lastOnlineAt
                adminRightsId
                publicKey
                createdAt
                updatedAt
                owner
              }
              chatRoom {
                id
                chatRoomId
                adminRightsId
                name
                image
                users {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                newMessages
                lastMessage {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                chatRoomLastMessageId
                owner
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          lastOnlineAt
          adminRightsId
          publicKey
          createdAt
          updatedAt
          owner
        }
        currentBalance
        transactions {
          TransactionID
          category
          type
          transactionExecutorId
          transactionAmount
          currency
          forUserId
          createdAt
          status
        }
        approvedLoanKitty
        approvedInvestmentKitty
        loansDisbursed {
          LoanID
          loaneeID
          category
          amountLoaned
          currency
          loanDisbursementDate
          interestRate
          loanPeriod
          totalInterestPayable
          totalLoanPayable
          installments
          installmentAmount
          installmentPaymentDate
          latePayments
          totalPaidtoDate
          percentagePaidtoDate
          repayments {
            LoanRepaymentID
            loanId
            loaneeId
            transactionID
            installmentDate
            installmentAmount
            paymentAmount
            paymentDate
            installmentBalance
          }
          loanDueDate
          fullyPaid
          defaulted
          actualAmountPaidonCompletion
          status
        }
        paidLoans
        activeLoans
        nonPerformingLoans
        createdAt
        updatedAt
      }
      loans {
        LoanID
        loaneeID
        category
        amountLoaned
        currency
        loanDisbursementDate
        interestRate
        loanPeriod
        totalInterestPayable
        totalLoanPayable
        installments
        installmentAmount
        installmentPaymentDate
        latePayments
        totalPaidtoDate
        percentagePaidtoDate
        repayments {
          LoanRepaymentID
          loanId
          loaneeId
          transactionID
          installmentDate
          installmentAmount
          paymentAmount
          paymentDate
          installmentBalance
        }
        loanDueDate
        fullyPaid
        defaulted
        actualAmountPaidonCompletion
        status
      }
      paidLoans
      activeLoans
      nonPerformingLoans
      lateLoanInstallmentRepayments
      loanRating
      loanRepayments {
        LoanRepaymentID
        loanId
        loaneeId
        transactionID
        installmentDate
        installmentAmount
        paymentAmount
        paymentDate
        installmentBalance
      }
      purchases {
        PurchaseID
        itemName
        quantity
        unitPrice
        currency
        BusinessID
        paymentStatus
        TransactionSettled
      }
      businesses {
        BusinessID
        businessName
        ownerUserId
        currentBalance
        transactions {
          TransactionID
          category
          type
          transactionExecutorId
          transactionAmount
          currency
          forUserId
          createdAt
          status
        }
        purchases {
          PurchaseID
          itemName
          quantity
          unitPrice
          currency
          BusinessID
          paymentStatus
          TransactionSettled
        }
        sales {
          SaleID
          itemName
          quantity
          unitPrice
          currency
          BusinessID
          paymentStatus
          TransactionSettled
        }
        inventory {
          InventoryID
          categoryName
          subCategoryName
          itemName
          currentStock
          unsettledOrders
          unitSalePrice
          currency
          createdAt
          updatedAt
        }
        loans {
          LoanID
          loaneeID
          category
          amountLoaned
          currency
          loanDisbursementDate
          interestRate
          loanPeriod
          totalInterestPayable
          totalLoanPayable
          installments
          installmentAmount
          installmentPaymentDate
          latePayments
          totalPaidtoDate
          percentagePaidtoDate
          repayments {
            LoanRepaymentID
            loanId
            loaneeId
            transactionID
            installmentDate
            installmentAmount
            paymentAmount
            paymentDate
            installmentBalance
          }
          loanDueDate
          fullyPaid
          defaulted
          actualAmountPaidonCompletion
          status
        }
        paidLoans
        activeLoans
        nonPerformingLoans
        lateLoanInstallmentRepayments
        loanRating
        loanRepayments {
          LoanRepaymentID
          loanId
          loaneeId
          transactionID
          installmentDate
          installmentAmount
          paymentAmount
          paymentDate
          installmentBalance
        }
      }
    }
  }
`;
