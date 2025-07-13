import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Loaded from .env file
  withCredentials: true, // For cookies/auth headers
});

export default instance;
