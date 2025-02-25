import useData from "./UseData";
import { GenreObject } from "./useGenres";

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

const useGames = (selectedGenre: GenreObject | null) => {
  return useData<GameObjects>(
    "/games",
    {
      params: { genre: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
};

export default useGames;
