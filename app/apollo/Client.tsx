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
} from '@apollo/client';
import { createAuthLink, AuthOptions, AUTH_TYPE } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import config from '../../src/aws-exports';
import { useAuth } from '../../context/auth';

interface IClient {
  children: React.ReactNode;
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;
const httpLink = createHttpLink({ uri: url });

// const typePolicies: TypePolicies = {};

const Client = ({ children }: IClient) => {
  const { cognitoUser } = useAuth();

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
      // cache: new InMemoryCache({ typePolicies }),
      cache: new InMemoryCache(),
    });
  }, [cognitoUser]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
