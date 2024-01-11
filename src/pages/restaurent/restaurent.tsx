import { Button } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../route/AppRoutes";
import { WrapLayout } from "@layout/wrap-layout";
import { HomeFilled } from "@ant-design/icons";

// import { useAuthenticationStore } from "../../../hooks/authentication";

export const Restaurent = memo(() => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate(AppRoutes.restaurent.detailId("1234"));
  };
  return (
    <WrapLayout
      breadcrumb={[
        {
          href: AppRoutes.restaurent.index,
          title: <span className="text-white">Restaurent</span>,
        },
      ]}
    >
      <h1>Restaurent</h1>
      <Button onClick={onDetail}>Detail</Button>
    </WrapLayout>
  );
});
