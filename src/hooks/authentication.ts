import { useCallback } from "react";
// import { loginRequest, logoutSuccess, changeRememberMe, initApp } from '~/store/slices/authentication';
import { loginRequest } from "../store/slice/authentication";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useAuthenticationStore = () => {
  const dispatch = useAppDispatch();
  const authenticationState = useAppSelector((state) => state.authentication);

  const dispatchLogin = useCallback(
    (payload: void) => {
      console.log("hooks", payload);
      dispatch(loginRequest(payload));

      return true;
    },
    [dispatch]
  );

  return { authenticationState, dispatchLogin };
};

export { useAuthenticationStore };
