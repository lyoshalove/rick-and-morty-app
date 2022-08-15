import { gql } from "@apollo/client";

export const GET_ALL_LOCATIONS = gql`
  query {
    locations {
      results {
        id, name, type
      }
    }
  }
`;