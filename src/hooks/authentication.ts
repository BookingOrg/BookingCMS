import { useCallback } from "react";
// import { loginRequest, logoutSuccess, changeRememberMe, initApp } from '~/store/slices/authentication';
import {
  loginRequest,
  logOutCMS,
  changeRememberMe,
  changeInforTest,
} from "../store/slice/authentication";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useAuthenticationStore = () => {
  const dispatch = useAppDispatch();
  const authenticationState = useAppSelector((state) => state.authentication);

  const dispatchLogin = useCallback(
    (payload: any) => {
      dispatch(loginRequest(payload));

      return true;
    },
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => {
    dispatch(logOutCMS());
  }, [dispatch]);

  const dispatchRemember = useCallback(() => {
    dispatch(changeRememberMe());
  }, [dispatch]);

  const dispatchTest = useCallback(() => {
    dispatch(changeInforTest());
  }, [dispatch]);
  return {
    authenticationState,
    dispatchLogin,
    dispatchLogOut,
    dispatchRemember,
    dispatchTest,
  };
};

export { useAuthenticationStore };
