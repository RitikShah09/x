import axios from "axios";

const instance = axios.create({
  // "https://x-backend-lqbp.onrender.com/"
  baseURL: "https://x-backend-lqbp.onrender.com/",
  withCredentials: true,
});

export default instance;
