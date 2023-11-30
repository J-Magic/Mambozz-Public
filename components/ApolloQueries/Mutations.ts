import { gql } from '@apollo/client';

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      chatStatus
      chatImage
      imageKey
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;

export const createChatRoom = gql`
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      adminRightsId
      name
      image
      newMessages
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;

export const createChatRoomUsers = gql`
  mutation CreateChatRoomUsers(
    $input: CreateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    createChatRoomUsers(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
// export const createChatRoom = /* GraphQL */ `
//   mutation CreateChatRoom(
//     $input: CreateChatRoomInput!
//     $condition: ModelChatRoomConditionInput
//   ) {
//     createChatRoom(input: $input, condition: $condition) {
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
