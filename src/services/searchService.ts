import axios from "../utils/axios";

interface SearchResponse {
  status: number;
  data: object;
  message: string;
  is_error: boolean;
}
export function getSearchQuery(query: any) {
  return new Promise((resolve, reject) => {
    // let requestHeader = {
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   },
    // };
    axios
      .get(`/restaurant?query=${JSON.stringify(query)}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
