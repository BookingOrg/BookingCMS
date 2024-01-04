import { createBrowserRouter } from "react-router-dom";
import { AuthLoginPages } from "../pages/auth";
import { PrivateRoute } from "../components";
// import App from "../App";
import { AppRoutes } from "./AppRoutes";
export const routerCMS = () => {
  return createBrowserRouter(
    [
      {
        path: AppRoutes.auth.index,
        element: <PrivateRoute />,

        children: [{ path: AppRoutes.auth.login, element: <AuthLoginPages /> }],
      },
    ],
    {
      basename: AppRoutes.home,
    }
  );
};
