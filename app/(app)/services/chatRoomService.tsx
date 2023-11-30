import { API, graphqlOperation } from 'aws-amplify';
import { GetUserQuery, User } from '@/src/API';
import { useAuth } from '../../../context/auth';
import { useAppSelector } from '@/Store';

export const getCommonChatRoomWithUser = async (userID: string) => {
  const authedUser = useAppSelector((state) => state.nav.userId);
  console.log('AuthedUser from store: ', authedUser);
  // const { authedUser } = useAuth();
  // if (!authedUser) {
  //   return null;
  // }

  // get all chat room of user1
  const response = (await API.graphql(
    graphqlOperation(listChatRooms, {
      id: authedUser,
    })
  )) as {
    data: GetUserQuery;
  };
  // console.log('MY CHATROOMS: ', response.data?.getChatUser?.chatRooms?.items);
  const chatRooms = response.data?.getUser?.chatRooms?.items || [];

  console.log('ChatRooms: ', chatRooms);
  // console.log(chatRooms[0].chatRoom.users.items[0]);

  // if (chatRooms !== null && chatRooms !== undefined) {
  //   const chatRoom = chatRooms.find((chatRoomItem) => {
  //     return (
  //       chatRoomItem.chatRoom.users.items.length === 2 &&
  //       chatRoomItem.chatRoom.users.items.some(
  //         (userItem) => userItem.user.id === userID
  //       )
  //     );
  //   });
  // }

  // return chatRoom;
  return chatRooms;
};

export const listChatRooms = /* GraphQL */ `
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

// export type GetUserQuery = {
//   getUser?: {
//     __typename: 'User',
//     id: string,
//     chatRooms?: {
//       __typename: 'ModelChatRoomUsersConnection',
//       items: Array<{
//         __typename: 'ChatRoomUsers',
//         chatRoom: {
//           __typename: 'ChatRoom',
//           users?: {
//             __typename: 'ModelChatRoomUsersConnection',
//             items: Array<{
//               __typename: 'ChatRoomUsers',
//               user: {
//                 __typename: 'User',
//                 id: string,
//               },
//             } | null>,
//           } | null,
//           id: string,
//         },
//       } | null>,
//     } | null,
//   } | null,
// };
