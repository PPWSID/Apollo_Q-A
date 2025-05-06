// src/apollo/client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // สมมุติว่า backend รันที่ port นี้
  cache: new InMemoryCache(),
});

export default client;
