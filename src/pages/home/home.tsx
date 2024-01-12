import { memo } from "react";
import { useAuthenticationStore } from "../../hooks/authentication";
import { Button, Col, Row } from "antd";
// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../../route/AppRoutes";
import { WrapLayout } from "../../layout/wrap-layout";
import { AppRoutes } from "../../route/AppRoutes";
import CostDashBoard from "@assets/costdashboard.svg";
// import { useAuthenticationStore } from "../../../hooks/authentication";

export const Home = memo(() => {
  const { dispatchLogOut, dispatchTest } = useAuthenticationStore();
  // const navigate = useNavigate();
  const handleRestaurent = () => {
    dispatchTest();
  };
  return (
    <WrapLayout
      breadCrumb={{
        href: AppRoutes.dashboard,
        title: "Dashboard",
      }}
      headerNav={
        <div className="mt-5">
          <div>
            <Row justify={"space-around"}>
              <Col className="bg-white py-4 px-8 rounded-2xl">
                <Row justify={"space-between"}>
                  <div>
                    <h2 className="opacity-70 text-base">TODAY'S MONEY</h2>
                    <span className="font-bold text-lg">$53,000</span>
                    <p className="text-base">
                      <span className="text-emerald-600 font-bold">+ 55%</span>{" "}
                      since yesterday
                    </p>
                  </div>
                  <img src={CostDashBoard} width={40} height={"auto"} />
                </Row>
              </Col>
              <Col className="bg-white py-4 px-8 rounded-2xl">
                <Row justify={"space-between"}>
                  <div>
                    <h2 className="opacity-70 text-base">NEW CLIENTS</h2>
                    <span className="font-bold text-lg">+3,462</span>
                    <p className="text-base">
                      <span className="text-red-600 font-bold">- 2%</span> since
                      last quater
                    </p>
                  </div>
                  <img src={CostDashBoard} width={40} height={"auto"} />
                </Row>
              </Col>
              <Col className="bg-white py-4 px-8 rounded-2xl">
                <Row justify={"space-between"}>
                  <div>
                    <h2 className="opacity-70 text-base">SALES</h2>
                    <span className="font-bold text-lg">$103,430</span>
                    <p className="text-base">
                      <span className="text-emerald-600 font-bold">+ 5%</span>{" "}
                      than last month
                    </p>
                  </div>
                  <img src={CostDashBoard} width={40} height={"auto"} />
                </Row>
              </Col>
              <Col className="bg-white py-4 px-8 rounded-2xl">
                <Row justify={"space-between"}>
                  <div>
                    <h2 className="opacity-70 text-base">TODAY'S USERS</h2>
                    <span className="font-bold text-lg">2,300</span>
                    <p className="text-base">
                      <span className="text-emerald-600 font-bold">+ 3%</span>{" "}
                      since last week
                    </p>
                  </div>
                  <img src={CostDashBoard} width={40} height={"auto"} />
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      }
    >
      <h1>Home Pages</h1>
      <Button onClick={handleRestaurent}>Restaurent</Button>
      <Button onClick={dispatchLogOut}>LogOut</Button>
    </WrapLayout>
  );
});
