import axios from "axios";

const apiUrl = "/api/v1";

export default axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
