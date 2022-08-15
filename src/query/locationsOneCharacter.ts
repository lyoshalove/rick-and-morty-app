import { gql } from "@apollo/client";

export const GET_ALL_LOCATIONS_ONE_CHARACTER = gql`
  query getAllLocationsOneCharacter($id: ID!) {
    character(id: $id) {
      episode {
        name,
        created,
        episode
      }
    }
  }
`;