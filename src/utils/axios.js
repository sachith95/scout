import axios from "axios";

const apiUrl = "http://localhost:3000/api/v1";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
