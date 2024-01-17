import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  useQuery,
  gql,
  createHttpLink,
  TypePolicies,
  HttpLink,
} from '@apollo/client';
import { createAuthLink, AuthOptions, AUTH_TYPE } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import config from '../../src/aws-exports';
import { useAuth } from '../../context/auth';
// import { cacheVar, modifyCache } from './ApolloCache';

interface IClient {
  children: React.ReactNode;
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;
// const httpLink = createHttpLink({ uri: url });
const httpLink = new HttpLink({ uri: url });

// const typePolicies: TypePolicies = {};

const Client = ({ children }: IClient) => {
  const { cognitoUser } = useAuth();
  console.log('COGNITO USER:', cognitoUser);

  const client = useMemo(() => {
    const jwtToken =
      cognitoUser?.getSignInUserSession()?.getAccessToken().getJwtToken() || '';
    // console.log('JWT TOKEN: ', jwtToken);

    const auth: AuthOptions = {
      type: config.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken,
    };

    const link = ApolloLink.from([
      createAuthLink({ url, region, auth }),
      createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
    ]);

    return new ApolloClient({
      link,
      cache: new InMemoryCache({
        typePolicies: {
          ChatMessage: {
            fields: {
              chatAttachments: {
                merge(
                  existing: any[],
                  incoming: any[],
                  { readField, mergeObjects }
                ) {
                  const merged: any[] = existing ? existing.slice(0) : [];
                  const attachmentchatMessageIDToIndex: Record<string, number> =
                    Object.create(null);

                  if (existing) {
                    existing.forEach((chatAttachment, index) => {
                      const chatMessageID = readField<string>(
                        'chatMessageID',
                        chatAttachment
                      );
                      if (chatMessageID !== undefined) {
                        attachmentchatMessageIDToIndex[chatMessageID] = index;
                      }
                    });
                  }
                  if (incoming && Array.isArray(incoming)) {
                    incoming.forEach((chatAttachment) => {
                      const chatMessageID = readField<string>(
                        'chatMessageID',
                        chatAttachment
                      );
                      if (chatMessageID !== undefined) {
                        const index =
                          attachmentchatMessageIDToIndex[chatMessageID];
                        if (typeof index === 'number') {
                          merged[index] = mergeObjects(
                            merged[index],
                            chatAttachment
                          );
                        } else {
                          // First time this chat attachment is seen in this array
                          attachmentchatMessageIDToIndex[chatMessageID] =
                            merged.length;
                          merged.push(chatAttachment);
                        }
                      }
                    });
                  }
                  return merged;
                },
              },
            },
          },
        },
      }),
      // cache: new InMemoryCache(),
      // cache: cacheVar(),
    });
  }, [cognitoUser]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
