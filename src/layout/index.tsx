import { Link, Outlet } from "react-router-dom";
import { Layout } from "antd";
// const logo = require("../assets/CMSlogo.png");
import CMSlogo from "../assets/CMSlogo.png";
import { AppRoutes } from "../route/AppRoutes";
const { Header, Footer, Sider } = Layout;

export const MainLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Link to={AppRoutes.dashboard}>
          <img src={CMSlogo} width={40} height={"auto"}></img>
        </Link>
      </Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Outlet />
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#ffffff",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  //   maxWidth: "calc(50% - 8px)",
};
