import { memo } from "react";
import { useAuthenticationStore } from "../../hooks/authentication";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../route/AppRoutes";
import { WrapLayout } from "../../layout/wrap-layout";
// import { useAuthenticationStore } from "../../../hooks/authentication";

export const Home = memo(() => {
  const { dispatchLogOut, dispatchTest } = useAuthenticationStore();
  const navigate = useNavigate();
  const handleRestaurent = () => {
    dispatchTest();
    // navigate(AppRoutes.restaurent.index);
  };
  return (
    <WrapLayout>
      <h1>Home Pages</h1>
      <Button onClick={handleRestaurent}>Restaurent</Button>
      <Button onClick={dispatchLogOut}>LogOut</Button>
    </WrapLayout>
  );
});
