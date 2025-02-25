import useData from "./UseData";

export interface GenreObject {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  useData<GenreObject>("/genres");
};

export default useGenres;
