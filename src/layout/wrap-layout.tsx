import { HomeFilled, NotificationFilled } from "@ant-design/icons";
import { AppRoutes } from "@route/AppRoutes";
import { Breadcrumb, Layout, Col, Row, FloatButton, Badge } from "antd";
import { ReactNode, memo } from "react";
type bread = {
  href?: string;
  title?: string;
};
type Props = {
  children: ReactNode;
  breadCrumb?: bread;
  headerNav?: ReactNode;
  // style: string;
};
export const WrapLayout = memo(({ children, breadCrumb, headerNav }: Props) => {
  return (
    <Layout>
      <div className="bg-[#5e72e4] py-8 pl-96">
        <div>
          <Row justify={"space-between"} className="px-4">
            <Col>
              <Breadcrumb
                separator={<span className="text-white">/</span>}
                items={[
                  {
                    href: AppRoutes.dashboard,
                    title: (
                      <HomeFilled style={{ color: "white", fontSize: 20 }} />
                    ),
                  },
                  {
                    href: breadCrumb?.href,
                    title: (
                      <span className="text-white">{breadCrumb?.title}</span>
                    ),
                  },
                ]}
              />
            </Col>
            <Col>
              <Badge count={5}>
                <NotificationFilled style={{ color: "white", fontSize: 25 }} />
              </Badge>
            </Col>
          </Row>
          <div>{headerNav}</div>
        </div>
        <FloatButton.BackTop visibilityHeight={20} />
      </div>
      <div className="pl-96">{children}</div>
    </Layout>
  );
});
