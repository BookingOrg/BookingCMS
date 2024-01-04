import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: { "Content-Type": "appication/json" },
});

// axiosClient.interceptors.request.use((config)=>{
//     const token = store.getState()?.authentication?.accessToken?.token;

//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
// })

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.status === 401) {
      console.log("authorization 401");
    }
    return response.data;
  },
  (error) => {
    throw error?.response?.data;
  }
);
export default axiosClient;
