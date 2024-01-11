import { Outlet } from "react-router-dom";
import { Avatar, Col, Divider, Layout, Row } from "antd";
// const logo = require("../assets/CMSlogo.png");

import NavParent from "./sidebar/nav";
import { SettingFilled } from "@ant-design/icons";
import "./style.css";
const { Sider } = Layout;

export const MainLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider style={wrapSliderStyle}>
        <div style={siderStyle} className="custom-scroll">
          <Row
            gutter={[10, 0]}
            align={"middle"}
            justify={"space-between"}
            // className="fixed top-0"
          >
            <Col>
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/283886020_1160350904752880_3363300465330194295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=V8R-vOveT6gAX99JCL_&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCtSnSvCHR8sF-Dx4UU-53Dcd3Sg3vnuxEC5QSkA0u7-w&oe=65A4E550"
                // sx={{ width: 24, height: 24 }}
              />
              <span className="font-semibold ml-1">Nguyễn Đình Anh</span>
            </Col>
            <Col>
              <SettingFilled
                style={settingStyle}
                className="hover:rotate-90 hover:ease-in"
              />
            </Col>
          </Row>
          <Divider />
          <NavParent />
        </div>
      </Sider>
      <Layout style={mainStyle}>
        <Outlet />
      </Layout>
    </Layout>
  );
};

const settingStyle: React.CSSProperties = {
  fontSize: 25,
  color: "#5e72e4",
  transition: "transform 2s ease",
};
const wrapSliderStyle: React.CSSProperties = {
  position: "fixed",
  zIndex: 1000,
  left: 20,
  top: 30,
};
const siderStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  position: "fixed",
  borderRadius: 20,
  height: 650,
  zIndex: 1000,
  padding: 15,
  width: 300,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,.16)",
  overflow: "auto",
  overflowY: "scroll",
};
const mainStyle: React.CSSProperties = {
  // width: "60%",
  // backgroundColor: "#000000",
};
const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  width: "100%",
  height: 1500,
};
