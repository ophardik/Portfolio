import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Ensure this environment variable is set correctly
});

export default axiosInstance;
