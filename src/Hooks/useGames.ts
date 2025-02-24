import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface GameObjects {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<GameObjects>;
}

const useGames = () => {
  const [games, setGames] = useState<GameObjects[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return {
    games,
    error,
  };
};

export default useGames;
