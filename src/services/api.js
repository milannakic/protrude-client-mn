import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        // when we get info from axios we always get in a certain object
        //in this case it will be object "response" and sub-object "data"
        //inside "data" there is sub-object error that we are sending from our server (part of the BE error handling)
        return reject(err.response.data.error);
      });
  });
}
