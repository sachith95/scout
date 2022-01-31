import axios from "../utils/axios";

export function login(data: any) {
  console.log("login", data);

  return new Promise((resolve, reject) => {
    axios
      .post(`/auth/login`, {
        user: data,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export function register(data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(`/user/register`, {
        user: data,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}
