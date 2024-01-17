import { gql } from '@apollo/client';

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
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
                }
                chatRoom {
                  id
                  chatRoomId
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
  }
`;

// export const createChatRoom = gql`
//   mutation CreateChatRoom(
//     $input: CreateChatRoomInput!
//     $condition: ModelChatRoomConditionInput
//   ) {
//     createChatRoom(input: $input, condition: $condition) {
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
//             chatStatus
//             chatImage
//             lastOnlineAt
//             adminRightsId
//             publicKey
//             createdAt
//             updatedAt
//             owner
//           }
//           createdAt
//           updatedAt
//           owner
//         }
//         nextToken
//       }
//       newMessages
//       createdAt
//       updatedAt
//       chatRoomLastMessageId
//       owner
//     }
//   }
// `;

export const createChatRoom = gql`
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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

// export const createChatRoom = gql`
//   mutation CreateChatRoom(
//     $input: CreateChatRoomInput!
//     $condition: ModelChatRoomConditionInput
//   ) {
//     createChatRoom(input: $input, condition: $condition) {
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

export const createChatRoomUsers = gql`
  mutation CreateChatRoomUsers(
    $input: CreateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    createChatRoomUsers(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      createdAt
      updatedAt
      owner
    }
  }
`;
// export const createChatRoomUsers = gql`
//   mutation CreateChatRoomUsers(
//     $input: CreateChatRoomUsersInput!
//     $condition: ModelChatRoomUsersConditionInput
//   ) {
//     createChatRoomUsers(input: $input, condition: $condition) {
//       id
//       userId
//       chatRoomId
//       user {
//         id
//         username
//         phoneNumber
//         numbers {
//           items {
//             number
//             createdAt
//             updatedAt
//             userNumbersId
//             owner
//           }
//           nextToken
//         }
//         email
//         chatStatus
//         chatImage
//         imageKey
//         chatMessages {
//           items {
//             id
//             createdAt
//             type
//             text
//             userId
//             chatRoomId
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
//             status
//             replyToMessageID
//             forUserId
//             updatedAt
//             owner
//           }
//           nextToken
//         }
//         chatRooms {
//           items {
//             id
//             userId
//             chatRoomId
//             user {
//               id
//               username
//               phoneNumber
//               numbers {
//                 items {
//                   number
//                   createdAt
//                   updatedAt
//                   userNumbersId
//                   owner
//                 }
//                 nextToken
//               }
//               email
//               chatStatus
//               chatImage
//               imageKey
//               chatMessages {
//                 items {
//                   id
//                   createdAt
//                   type
//                   text
//                   userId
//                   chatRoomId
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
//                   status
//                   replyToMessageID
//                   forUserId
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               chatRooms {
//                 items {
//                   id
//                   userId
//                   chatRoomId
//                   user {
//                     id
//                     username
//                     phoneNumber
//                     numbers {
//                       items {
//                         number
//                         createdAt
//                         updatedAt
//                         userNumbersId
//                         owner
//                       }
//                       nextToken
//                     }
//                     email
//                     chatStatus
//                     chatImage
//                     imageKey
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatRooms {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     lastOnlineAt
//                     adminRightsId
//                     publicKey
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   chatRoom {
//                     id
//                     chatRoomId
//                     adminRightsId
//                     name
//                     image
//                     users {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     newMessages
//                     lastMessage {
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
//                     createdAt
//                     updatedAt
//                     chatRoomLastMessageId
//                     owner
//                   }
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               lastOnlineAt
//               adminRightsId
//               publicKey
//               createdAt
//               updatedAt
//               owner
//             }
//             chatRoom {
//               id
//               chatRoomId
//               adminRightsId
//               name
//               image
//               users {
//                 items {
//                   id
//                   userId
//                   chatRoomId
//                   user {
//                     id
//                     username
//                     phoneNumber
//                     numbers {
//                       items {
//                         number
//                         createdAt
//                         updatedAt
//                         userNumbersId
//                         owner
//                       }
//                       nextToken
//                     }
//                     email
//                     chatStatus
//                     chatImage
//                     imageKey
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatRooms {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     lastOnlineAt
//                     adminRightsId
//                     publicKey
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   chatRoom {
//                     id
//                     chatRoomId
//                     adminRightsId
//                     name
//                     image
//                     users {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     newMessages
//                     lastMessage {
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
//                     createdAt
//                     updatedAt
//                     chatRoomLastMessageId
//                     owner
//                   }
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               chatMessages {
//                 items {
//                   id
//                   createdAt
//                   type
//                   text
//                   userId
//                   chatRoomId
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
//                   status
//                   replyToMessageID
//                   forUserId
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               newMessages
//               lastMessage {
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
//               createdAt
//               updatedAt
//               chatRoomLastMessageId
//               owner
//             }
//             createdAt
//             updatedAt
//             owner
//           }
//           nextToken
//         }
//         lastOnlineAt
//         adminRightsId
//         publicKey
//         createdAt
//         updatedAt
//         owner
//       }
//       chatRoom {
//         id
//         chatRoomId
//         adminRightsId
//         name
//         image
//         users {
//           items {
//             id
//             userId
//             chatRoomId
//             user {
//               id
//               username
//               phoneNumber
//               numbers {
//                 items {
//                   number
//                   createdAt
//                   updatedAt
//                   userNumbersId
//                   owner
//                 }
//                 nextToken
//               }
//               email
//               chatStatus
//               chatImage
//               imageKey
//               chatMessages {
//                 items {
//                   id
//                   createdAt
//                   type
//                   text
//                   userId
//                   chatRoomId
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
//                   status
//                   replyToMessageID
//                   forUserId
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               chatRooms {
//                 items {
//                   id
//                   userId
//                   chatRoomId
//                   user {
//                     id
//                     username
//                     phoneNumber
//                     numbers {
//                       items {
//                         number
//                         createdAt
//                         updatedAt
//                         userNumbersId
//                         owner
//                       }
//                       nextToken
//                     }
//                     email
//                     chatStatus
//                     chatImage
//                     imageKey
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatRooms {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     lastOnlineAt
//                     adminRightsId
//                     publicKey
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   chatRoom {
//                     id
//                     chatRoomId
//                     adminRightsId
//                     name
//                     image
//                     users {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     newMessages
//                     lastMessage {
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
//                     createdAt
//                     updatedAt
//                     chatRoomLastMessageId
//                     owner
//                   }
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               lastOnlineAt
//               adminRightsId
//               publicKey
//               createdAt
//               updatedAt
//               owner
//             }
//             chatRoom {
//               id
//               chatRoomId
//               adminRightsId
//               name
//               image
//               users {
//                 items {
//                   id
//                   userId
//                   chatRoomId
//                   user {
//                     id
//                     username
//                     phoneNumber
//                     numbers {
//                       items {
//                         number
//                         createdAt
//                         updatedAt
//                         userNumbersId
//                         owner
//                       }
//                       nextToken
//                     }
//                     email
//                     chatStatus
//                     chatImage
//                     imageKey
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatRooms {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     lastOnlineAt
//                     adminRightsId
//                     publicKey
//                     createdAt
//                     updatedAt
//                     owner
//                   }
//                   chatRoom {
//                     id
//                     chatRoomId
//                     adminRightsId
//                     name
//                     image
//                     users {
//                       items {
//                         id
//                         userId
//                         chatRoomId
//                         createdAt
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     chatMessages {
//                       items {
//                         id
//                         createdAt
//                         type
//                         text
//                         userId
//                         chatRoomId
//                         status
//                         replyToMessageID
//                         forUserId
//                         updatedAt
//                         owner
//                       }
//                       nextToken
//                     }
//                     newMessages
//                     lastMessage {
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
//                     createdAt
//                     updatedAt
//                     chatRoomLastMessageId
//                     owner
//                   }
//                   createdAt
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               chatMessages {
//                 items {
//                   id
//                   createdAt
//                   type
//                   text
//                   userId
//                   chatRoomId
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
//                   status
//                   replyToMessageID
//                   forUserId
//                   updatedAt
//                   owner
//                 }
//                 nextToken
//               }
//               newMessages
//               lastMessage {
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
//               createdAt
//               updatedAt
//               chatRoomLastMessageId
//               owner
//             }
//             createdAt
//             updatedAt
//             owner
//           }
//           nextToken
//         }
//         chatMessages {
//           items {
//             id
//             createdAt
//             type
//             text
//             userId
//             chatRoomId
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
//             status
//             replyToMessageID
//             forUserId
//             updatedAt
//             owner
//           }
//           nextToken
//         }
//         newMessages
//         lastMessage {
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
//         createdAt
//         updatedAt
//         chatRoomLastMessageId
//         owner
//       }
//       createdAt
//       updatedAt
//       owner
//     }
//   }
// `;

export const createChatMessage = gql`
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
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

export const createChatAttachment = gql`
  mutation CreateChatAttachment(
    $input: CreateChatAttachmentInput!
    $condition: ModelChatAttachmentConditionInput
  ) {
    createChatAttachment(input: $input, condition: $condition) {
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
  }
`;
export const updateChatRoom = gql`
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteUser = gql`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;

export const createIndividualUserAccount = gql`
  mutation CreateIndividualUserAccount($UserID: ID!) {
    createIndividualUserAccount(UserID: $UserID) {
      ID
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
