import { memo, useCallback, useMemo } from "react";

import { Button, Form, Input, Checkbox, Col, Row } from "antd";
import { useAuthenticationStore } from "@hooks/index";
import { RegexValidator } from "@helpers/regex";
import CMSlogo from "../../assets/CMSlogo.png";
import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import LogoFaceBook from "@assets/facebook.svg";
import LogoGoogle from "@assets/google.svg";
import LogoLinkdein from "@assets/linkedin.svg";

type LoginType = {
  username?: string;
  password?: string;
  remember?: boolean;
};
export const AuthLogin = memo(() => {
  const { dispatchRemember, authenticationState, dispatchLogin } =
    useAuthenticationStore();
  const [form] = Form.useForm();
  const rememberMe = useMemo(
    () => authenticationState.rememberMe,
    [authenticationState.rememberMe]
  );
  const onFinish = useCallback(
    (values: LoginType) => {
      // console.log("Success:", values);
      dispatchLogin({ username: "admin", password: "admin123" });
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

            initialValues={{
              remember: rememberMe,
              username: "anhnguyendin263@gmail.com",
              password: "Anhdinh@123",
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item<LoginType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                {
                  pattern: RegexValidator.email,
                  message: "Please input type of email",
                },
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
                {
                  pattern: RegexValidator.password,
                  message:
                    "Please input password least 1 special characters,1 number and 1 uptocase characters",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item<LoginType> name="remember">
              <Checkbox checked={rememberMe} onChange={dispatchRemember}>
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
          <p className="text-center font-bold select-none">Login with</p>
          <Row
            className="mt-8"
            justify={"center"}
            // align={"center"}
            gutter={[30, 50]}
          >
            <Col className="cursor-pointer">
              <img
                src={LogoFaceBook}
                alt="facebooklogo"
                width={30}
                height={"auto"}
              />
            </Col>
            <Col className="cursor-pointer">
              <img
                src={LogoGoogle}
                alt="logogoogle"
                width={30}
                height={"auto"}
              />
            </Col>
            <Col className="cursor-pointer">
              <img
                src={LogoLinkdein}
                alt="logolinked"
                width={30}
                height={"auto"}
              />
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
});
