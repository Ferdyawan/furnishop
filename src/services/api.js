import axios from "axios";

export const api = axios.create({
  baseURL: "https://lumoshive-api-furniture.vercel.app/api",
});
