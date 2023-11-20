import { useQuery, useSuspenseQuery } from "@apollo/client";
import React from "react";
import FilmCard from "./FilmCard";
import { ALL_FILM_QUERY } from "../../queries/film";
import { AllFilmResponse } from "../../queries/type";

const Film: React.FC = () => {
  const { data } = useSuspenseQuery<AllFilmResponse>(ALL_FILM_QUERY);
  const [selectedFilm, setSelectedFilm] = React.useState<string>("");
  return (
    <div>
      <select onChange={(e) => setSelectedFilm(e.target.value)}>
        {data?.allFilms?.films?.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>
      {data?.allFilms?.films?.map(({ title }) => (
        <FilmCard title={title} />
      ))}
    </div>
  );
};

export default Film;
