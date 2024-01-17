import { gql } from '@apollo/client';

export const onUpdateChatroomByChatroomId = gql`
  subscription OnUpdateChatroomByChatroomId($chatRoomId: ID!) {
    onUpdateChatroomByChatroomId(chatRoomId: $chatRoomId) {
      id
      chatRoomId
      adminRightsId
      name
      image
      users {
        items {
          id
          user {
            id
            username
            phoneNumber
            chatStatus
            chatImage
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
                user {
                  id
                }
              }
              nextToken
            }
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

// export const onUpdateChatroomByChatroomId = gql`
//   subscription OnUpdateChatroomByChatroomId($chatRoomId: ID!) {
//     onUpdateChatroomByChatroomId(chatRoomId: $chatRoomId) {
//       id
//       chatRoomId
//       adminRightsId
//       name
//       image
//       users {
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
//       newMessages
//       lastMessage {
//         id
//         createdAt
//         type
//         text
//         userId
//         chatRoomId
//         chatAttachments {
//           items {
//             id
//             chatMessageID
//             chatRoomID
//             storageKey
//             type
//             width
//             height
//             duration
//             createdAt
//             updatedAt
//             owner
//           }
//           nextToken
//         }
//         status
//         replyToMessageID
//         forUserId
//         updatedAt
//         owner
//       }
//       chatAttachments {
//         items {
//           id
//           chatMessageID
//           chatRoomID
//           storageKey
//           type
//           width
//           height
//           duration
//           createdAt
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       createdAt
//       updatedAt
//       chatRoomLastMessageId
//       owner
//     }
//   }
// `;

export const onCreateNewChatMessageByChatroomId = gql`
  subscription OnCreateNewChatMessageByChatroomId($chatRoomId: ID!) {
    onCreateNewChatMessageByChatroomId(chatRoomId: $chatRoomId) {
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
  }
`;
