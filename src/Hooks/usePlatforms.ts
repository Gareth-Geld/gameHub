import useData from "./UseData";

export interface PlatformObject {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useData<PlatformObject>("/platforms/lists/parents");
};

export default usePlatforms;
