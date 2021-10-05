import axios from "axios";

export async function getTime() {
  return axios
    .get("/api")
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
