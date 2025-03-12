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

const useGames = (
  selectedGenre: GenreObject | null,
  selectedPlatform: PlatformObject | null
) => {
  return useData<GameObjects>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platform: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};

export default useGames;
