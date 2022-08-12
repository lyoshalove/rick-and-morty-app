import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id,
        name,
        image,
        status
      }
    }
  }
`;