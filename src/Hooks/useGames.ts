import useData from "./UseData";

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

const useGames = () => {
  useData<GameObjects>("/games");
};

export default useGames;
