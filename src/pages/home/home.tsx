import { memo } from "react";
import { useAuthenticationStore } from "../../hooks/authentication";
import { Breadcrumb, Button, Statistic } from "antd";
// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../../route/AppRoutes";
import { WrapLayout } from "../../layout/wrap-layout";
import { HomeFilled, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { AppRoutes } from "../../route/AppRoutes";
// import { useAuthenticationStore } from "../../../hooks/authentication";

export const Home = memo(() => {
  const { dispatchLogOut, dispatchTest } = useAuthenticationStore();
  // const navigate = useNavigate();
  const handleRestaurent = () => {
    dispatchTest();
  };
  return (
    <WrapLayout
      breadcrumb={[
        {
          href: AppRoutes.dashboard,
          title: <span className="text-white">Dashboard</span>,
        },
      ]}
    >
      <h1>Home Pages</h1>
      <Button onClick={handleRestaurent}>Restaurent</Button>
      <Button onClick={dispatchLogOut}>LogOut</Button>
    </WrapLayout>
  );
});
