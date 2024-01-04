import { dataPostLoginType } from "../utils/types";
import axiosClient from "./axiosClient";
const loginRequestApi = (params: dataPostLoginType) => {
  return axiosClient.post("/auth/login", params);
};
export { loginRequestApi };
