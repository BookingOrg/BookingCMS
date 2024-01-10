import { Layout } from "antd";
import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};
export const WrapLayout = memo(({ children }: Props) => {
  return <Layout className=" bg-white">{children}</Layout>;
});
