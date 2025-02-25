import useData from "./UseData";

export interface GenreObject {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  return useData<GenreObject>("/genres");
};

export default useGenres;
