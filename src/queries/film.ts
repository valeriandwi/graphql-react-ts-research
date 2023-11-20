import { gql } from "@apollo/client";

export const ALL_FILM_QUERY = gql`
  query AllFilms {
    allFilms {
      films {
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
        created
        edited
        id
      }
    }
  }
`;
