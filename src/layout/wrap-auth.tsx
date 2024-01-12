import { Layout } from "antd";
import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  // style: string;
};
export const WrapAuth = memo(({ children }: Props) => {
  return <Layout>{children}</Layout>;
});
