import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface GenreObject {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: GenreObject[];
}

const useGenres = () => {
  const [Genres, setGenres] = useState<GenreObject[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setErrors(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { Genres, errors, isLoading };
};

export default useGenres;
