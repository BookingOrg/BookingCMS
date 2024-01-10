import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/v1",
  headers: { "Content-Type": "appication/json" },
  timeout: 20000,
});

// axiosClient.interceptors.request.use((config) => {
//   console.log("config", config);
//   //   const token = store.getState()?.authentication?.accessToken?.token;

//   // if (token) {
//   //   config.headers['Authorization'] = `Bearer ${token}`;
//   // }
// });

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.status === 401) {
      console.log("authorization 401");
    }
    return Promise.resolve(response.data);
  },
  (error) => {
    throw error?.response?.data;
  }
);
export default axiosClient;
