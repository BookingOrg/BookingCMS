type AccessToken = {
  token: string;
  expires: string;
};
type RefreshToken = {
  token: string;
  expires: string;
};
export type dataPostLoginType = {
  username: string;
  password: string;
  payload: any;
};
export interface authenticationType {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
  loginInfo: object | null;
  rememberMe: boolean;
  loading: boolean;
  isLoggedIn: boolean;
}
