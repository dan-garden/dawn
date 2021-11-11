import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.WORDPRESS_API_URL;
const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});

export default client;
