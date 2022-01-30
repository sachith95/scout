import axios from "../utils/axios";

export function getFavoriteQuery() {
  console.log("getFavoriteQuery");
  return new Promise((resolve, reject) => {
    axios
      .get(`/favorite`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function setFavoriteQuery(data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(`/favorite`, {
        name: data,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addToFavoriteQuery(data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(`/favorite/add`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
