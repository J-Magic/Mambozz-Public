import { gql } from '@apollo/client';

export const onUpdateChatroomByChatroomId = gql`
  subscription OnUpdateChatroomByChatroomId($chatRoomID: ID!) {
    onUpdateChatroomByChatroomId(chatRoomID: $chatRoomID) {
      id
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
            codelessNumber
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
                  codelessNumber
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
                        codelessNumber
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
                        codelessNumber
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
                  codelessNumber
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
                        codelessNumber
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
                        codelessNumber
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

// export const onUpdateChatroomByChatroomId = gql `
//   subscription OnUpdateChatroomByChatroomId($chatRoomID: ID!) {
//     onUpdateChatroomByChatroomId(chatRoomID: $chatRoomID) {
//       id
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
//             codelessNumber
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
//                   codelessNumber
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
//                         codelessNumber
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
//                         codelessNumber
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
//                   codelessNumber
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
//                         codelessNumber
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
//                         codelessNumber
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
