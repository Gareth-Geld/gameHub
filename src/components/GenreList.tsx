import React from "react";
import useGenres, { GenreObject } from "../Hooks/useGenres";
import useData from "../Hooks/UseData";

const GenreList = () => {
  const { data, error, isLoading } = useData<GenreObject>("/genres");
  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
