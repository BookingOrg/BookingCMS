import { memo, useCallback } from "react";
// import { useAuthenticationStore } from "../../../hooks/authentication";

import { Button } from "antd";
import { useAuthenticationStore } from "../../../hooks/authentication";

export const AuthLoginPages = memo(() => {
  const { dispatchLogin } = useAuthenticationStore();
  const handleLogin = useCallback(() => {
    dispatchLogin({ username: "2412", password: 123 });
  }, [dispatchLogin]);
  return (
    <>
      <h1>Login form</h1>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
});
