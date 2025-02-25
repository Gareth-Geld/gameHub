import React from "react";
import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { Genres, errors, isLoading } = useGenres();
  return (
    <>
      <ul>
        {Genres.map((Genre) => (
          <li key={Genre.id}>{Genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
