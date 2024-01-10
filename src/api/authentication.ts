import { dataPostLoginType } from "../utils/types";
import axiosClient from "./axiosClient";
import { endpoint } from "./endpoint";
const loginRequestApi = (params: dataPostLoginType) => {
  return axiosClient.post(endpoint.auth.login, params);
};
export { loginRequestApi };
