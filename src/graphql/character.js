import gql from "graphql-tag";

export const characterFragments = {
  characterBase: gql`
    fragment CharacterBase on Character {
      id
      name {
        first
        last
        full
        native
      }
      favourites
      image {
        large
      }
      description
    }
  `,
  mediaBase: gql`
    fragment MediaBase on MediaConnection {
      nodes {
        id
        startDate {
          year
          month
          day
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
      pageInfo {
        total
      }
    }
  `
};

export const SEARCH_CHARACTER = gql`
  query SearchCharacter($name: String) {
    Character(search: $name) {
      ...CharacterBase
      media(type: ANIME, perPage: 20, sort: START_DATE) {
        ...MediaBase
      }
    }
  }
  ${characterFragments.characterBase}
  ${characterFragments.mediaBase}
`;
