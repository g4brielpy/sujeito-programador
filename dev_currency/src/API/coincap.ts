import axios, { type AxiosInstance } from "axios";

export const apiCoincap: AxiosInstance = axios.create({
  baseURL: "https://rest.coincap.io/v3/",
  params: {
    apiKey: import.meta.env.VITE_COINCAP_API_KEY,
  },
});
