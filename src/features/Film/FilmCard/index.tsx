import React from "react";

interface FilmCardProps {
  title: string;
}

const FilmCard: React.FC<FilmCardProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default FilmCard;
