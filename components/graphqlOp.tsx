import { CreateChatRoomInput } from '@/src/API';
import { API, graphqlOperation } from 'aws-amplify';

export const gqlOp = async <ResultType extends {}>(
  query: string,
  variables?: CreateChatRoomInput
) => {
  const { data } = (await API.graphql(graphqlOperation(query, variables))) as {
    data: ResultType;
  };
  return data;
};
