import { gql } from "@apollo/client";

export const GET_ONE_LOCATION = gql`
  query getOneLocation($id: ID!) {
    location(id: $id) {
      name, type, dimension, residents {
        image, name, status
      }
    }
  }
`;