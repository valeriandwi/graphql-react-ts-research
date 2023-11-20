export type AllFilmResponse = {
  __typename?: "Feed";
  allFilms: {
    films: {
      title: string;
      episodeID: string;
      openingCrawl: string;
      director: string;
      producers: string[];
      releaseDate: string;
      created: string;
      edited: string;
      id: string;
    }[];
  };
};
