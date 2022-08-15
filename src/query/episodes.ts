import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query getAllEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id, episode, name, created
      },
      info {
        next
      }
    }
  }
`;