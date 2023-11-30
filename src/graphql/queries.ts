/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsersByNumbers = /* GraphQL */ `
  query GetUsersByNumbers($numbers: [contactsInput]!) {
    getUsersByNumbers(numbers: $numbers) {
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
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($number: ID!) {
    getContact(number: $number) {
      number
      createdAt
      updatedAt
      userNumbersId
      owner
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $number: ID
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContacts(
      number: $number
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        number
        createdAt
        updatedAt
        userNumbersId
        owner
      }
      nextToken
    }
  }
`;
export const getAdminRights = /* GraphQL */ `
  query GetAdminRights($id: ID!) {
    getAdminRights(id: $id) {
      id
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
      Users {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      adminRightsChatRoomId
      owner
    }
  }
`;
export const listAdminRights = /* GraphQL */ `
  query ListAdminRights(
    $filter: ModelAdminRightsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminRights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        Users {
          items {
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
          nextToken
        }
        createdAt
        updatedAt
        adminRightsChatRoomId
        owner
      }
      nextToken
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
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
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getChatAttachment = /* GraphQL */ `
  query GetChatAttachment($id: ID!) {
    getChatAttachment(id: $id) {
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
export const listChatAttachments = /* GraphQL */ `
  query ListChatAttachments(
    $filter: ModelChatAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUsers = /* GraphQL */ `
  query GetChatRoomUsers($id: ID!) {
    getChatRoomUsers(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const usersByPhoneNumber = /* GraphQL */ `
  query UsersByPhoneNumber(
    $phoneNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByPhoneNumber(
      phoneNumber: $phoneNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const usersByCodelessNumber = /* GraphQL */ `
  query UsersByCodelessNumber(
    $codelessNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCodelessNumber(
      codelessNumber: $codelessNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const usersByAdminRightsId = /* GraphQL */ `
  query UsersByAdminRightsId(
    $adminRightsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByAdminRightsId(
      adminRightsId: $adminRightsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const chatMessagesByUserId = /* GraphQL */ `
  query ChatMessagesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatMessagesByUserId(
      userId: $userId
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
export const listChatMessagesByChatRoom = /* GraphQL */ `
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
export const chatAttachmentsByChatMessageID = /* GraphQL */ `
  query ChatAttachmentsByChatMessageID(
    $chatMessageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatAttachmentsByChatMessageID(
      chatMessageID: $chatMessageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const chatAttachmentsByChatRoomID = /* GraphQL */ `
  query ChatAttachmentsByChatRoomID(
    $chatRoomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatAttachmentsByChatRoomID(
      chatRoomID: $chatRoomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const chatRoomUsersByUserId = /* GraphQL */ `
  query ChatRoomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const chatRoomUsersByChatRoomId = /* GraphQL */ `
  query ChatRoomUsersByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
