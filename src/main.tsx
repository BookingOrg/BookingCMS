import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffffff",
          colorBgContainer: "#000000",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
