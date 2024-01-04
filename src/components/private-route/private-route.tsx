import { Fragment, memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../route/AppRoutes";
import { useAuthenticationStore } from "../../hooks/authentication";

type Props = {
  isAuthRoute?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout?: any;
  isPrivate?: boolean;
};
export const PrivateRoute = memo(
  ({ isAuthRoute, isPrivate, layout: Layout = Fragment }: Props) => {
    const { authenticationState } = useAuthenticationStore();
    if (isAuthRoute && authenticationState.isLoggedIn) {
      // dang o route auth va da login
      return <Navigate to={AppRoutes.home} replace />;
    }
    if (isPrivate && !authenticationState.isLoggedIn) {
      //dang o route home va chua login
      return <Navigate to={AppRoutes.auth.login} replace />;
    }
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
);
