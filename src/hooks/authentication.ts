import { useCallback } from "react";
// import { loginRequest, logoutSuccess, changeRememberMe, initApp } from '~/store/slices/authentication';
import {
  loginRequest,
  logOutCMS,
  changeRememberMe,
  changeInforTest,
} from "../store/slice/authentication";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { dataPostLoginType } from "@utils/types";

const useAuthenticationStore = () => {
  const dispatch = useAppDispatch();
  const authenticationState = useAppSelector((state) => state.authentication);

  const dispatchLogin = useCallback(
    (payload: dataPostLoginType) => {
      dispatch(loginRequest(payload));
      return true;
    },
    [dispatch]
  );

  const dispatchLogOut = useCallback(() => {
    dispatch(logOutCMS());
    return true;
  }, [dispatch]);

  const dispatchRemember = useCallback(() => {
    dispatch(changeRememberMe());
    return true;
  }, [dispatch]);

  const dispatchTest = useCallback(() => {
    dispatch(changeInforTest());
    return true;
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
