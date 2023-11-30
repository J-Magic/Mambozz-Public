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
      chatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const listChatRooms = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getChatRoom = gql`
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
            chatStatus
            chatImage
            imageKey
            chatMessages
            chatRooms
            lastOnlineAt
            adminRightsId
            createdAt
            updatedAt
            owner
          }
        }
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
        chatAttachments
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
