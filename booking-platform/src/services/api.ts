import axios from "axios";

const api = axios.create({
  baseURL: "https://airbnb19.p.rapidapi.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "airbnb19.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  },
});

export default api;