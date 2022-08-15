import { gql } from "@apollo/client";

export const GET_ONE_CHARACTER = gql`
  query getOneCharacter($id: ID!) {
    character(id: $id) {
      name,
      image,
      status,
      species,
      gender,
      type,
      origin {
        name
      },
      location {
        name
      }
    }
  }
`;