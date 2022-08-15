import { gql } from "@apollo/client";

export const GET_ONE_EPISODE = gql`
  query getOneEpisode($id: ID!) {
    episode(id: $id) {
      name, created, episode, characters {
        name, image, status
      }
    }
  }
`;