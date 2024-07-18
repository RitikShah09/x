import axios from "axios";

const instance = axios.create({
  // "https://x-backend-lqbp.onrender.com/"
  // baseURL:"https://internshala-8a7j.onrender.com/",
  baseURL: "https://x-backend-lqbp.onrender.com/",
  withCredentials: true,
});

export default instance;
