import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, from } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { RestLink } from "apollo-link-rest";

const ANILIST_API = "https://graphql.anilist.co/";
const GIPHY_API = "https://api.giphy.com/v1/";

const httpLink = new HttpLink({ uri: ANILIST_API });

const restLink = new RestLink({
  uri: GIPHY_API,
  typePatcher: {
    GifPayload: data => {
      return {
        results: data.data.map(gif => ({ __typename: "GifPayload", ...gif }))
      };
    }
  }
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([onErrorLink, restLink, httpLink]),
  cache: new InMemoryCache()
});

export default client;
