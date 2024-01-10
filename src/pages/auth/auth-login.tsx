import { memo, useCallback, useMemo } from "react";
// import { useAuthenticationStore } from "../../../hooks/authentication";

import { Button, Form, Input, Checkbox, Col } from "antd";
import { useAuthenticationStore } from "../../hooks/authentication";
import { useNavigate } from "react-router-dom";
import PopupNotification from "../../helpers/popup-notification";
import CMSlogo from "../../assets/CMSlogo.png";
import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
type LoginType = {
  username?: string;
  password?: string;
  remember?: boolean;
};
export const AuthLogin = memo(() => {
  const navigate = useNavigate();
  const { dispatchRemember, authenticationState, dispatchLogin } =
    useAuthenticationStore();
  const [form] = Form.useForm();

  const onFinish = useCallback(
    (values: LoginType) => {
      console.log("Success:", values);
      // dispatchRemember();
      dispatchLogin({ username: "2412", password: 123 });
      // PopupNotification(
      //   "success",
      //   "message",
      //   "This is decription of notification"
      // );
    },
    [dispatchLogin]
  );

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex items-center justify-center">
      <Col className="bg-white p-8 rounded-xl h-4/5 w-96 m-2">
        <img
          src={CMSlogo}
          width={100}
          height={"auto"}
          className="mx-auto mb-7 select-none"
        />
        {/* <h1 className="font-bold text-4xl mb-10 text-center ">Booking Login</h1> */}
        <div>
          <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}

            initialValues={{ remember: authenticationState.rememberMe }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item<LoginType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="mb-10"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item<LoginType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                // {
                //   validator: async (_, value) => {
                //     if (!value || value == "ok") {
                //       // return Promise.reject("Nhap khau bi ngao da");
                //     }
                //   },
                // },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item<LoginType> name="remember">
              <Checkbox
                checked={authenticationState.rememberMe}
                onChange={dispatchRemember}
              >
                Remember me
              </Checkbox>
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button
                type="primary"
                shape="round"
                icon={<LoginOutlined />}
                htmlType="submit"
                size={"large"}
                className="w-48 bg-blue-500"
                loading={false}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </div>
  );
});
