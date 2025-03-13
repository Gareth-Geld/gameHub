import { GameQuery } from "../App";
import useData from "./UseData";
import { GenreObject } from "./useGenres";
import { PlatformObject } from "./usePlatforms";

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

const useGames = (gameQuery: GameQuery) => {
  return useData<GameObjects>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
};

export default useGames;
