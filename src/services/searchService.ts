import axios from "../utils/axios";

interface SearchResponse {
  status: number;
  data: object;
  message: string;
  is_error: boolean;
}
export function getSearchQuery(query: string, token: string) {
  return new Promise((resolve, reject) => {
    let requestHeader = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(`/search?query=${query}`, requestHeader)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
