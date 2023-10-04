import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
  },
});
