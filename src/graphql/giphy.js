import gql from "graphql-tag";

export const SEARCH_GIF = gql`
  query GifSearch($query: String) {
    search(query: $query, apiKey: "aMJSh7NXc16452SiH1ENBfxtwnHXhA77")
      @rest(
        type: "GifPayload"
        path: "gifs/search?q={args.query}&api_key={args.apiKey}"
      ) {
      results {
        title
        url
        embed_url
      }
    }
  }
`;
