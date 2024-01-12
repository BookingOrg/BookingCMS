import { memo } from "react";
// import { useAuthenticationStore } from "../../../hooks/authentication";
type Props = {
  name: string;
};
export const Error = memo(({ name }: Props) => {
  return (
    <>
      <h1>Error Page {name}</h1>
    </>
  );
});
