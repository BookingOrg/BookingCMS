import { HomeFilled } from "@ant-design/icons";
import { AppRoutes } from "@route/AppRoutes";
import { Breadcrumb, Layout } from "antd";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { ReactNode, memo } from "react";
type bread = {
  href: string;
  title: ReactNode;
};
type check = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;
type Props = {
  children: ReactNode;
  breadcrumb: check[];
  // style: string;
};
export const WrapLayout = memo(({ children, breadcrumb }: Props) => {
  return (
    <Layout>
      <div className="bg-[#5e72e4] py-8 pl-96">
        <Breadcrumb
          separator={<span className="text-white">/</span>}
          items={[
            {
              href: AppRoutes.dashboard,
              title: <HomeFilled style={{ color: "white", fontSize: 20 }} />,
            },
            ...breadcrumb,
          ]}
        />
      </div>
      <div className="pl-96">{children}</div>
    </Layout>
  );
});
