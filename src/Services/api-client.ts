import axios from "axios";

const API = "56f3d895d4674ba9a9964fea3419831a";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API,
  },
});
