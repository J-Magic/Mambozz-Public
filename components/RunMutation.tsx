import { CreateChatRoomInput } from '@/src/API';
import { gqlOp } from './graphqlOp';
export const mutation = async <ResultType extends {}>(
  query: string,
  variables?: CreateChatRoomInput
) => gqlOp<ResultType>(query, variables);
