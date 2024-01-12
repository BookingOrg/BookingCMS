import { createBrowserRouter } from "react-router-dom";
import { AuthLogin } from "@pages/auth/auth-login";
import { Home } from "@pages/home";
import { PrivateRoute } from "@components/index";
import { Error } from "@pages/error";
import { Restaurent, RestaurentDetail } from "@pages/restaurent";
import { MainLayout } from "@layout/index";
import { WrapAuth } from "@layout/wrap-auth";
// import App from "../App";
import { AppRoutes } from "./AppRoutes";
export const routerCMS = () => {
  return createBrowserRouter(
    [
      {
        path: AppRoutes.auth.index,
        element: (
          <PrivateRoute isAuthRoute isPrivate={false} layout={WrapAuth} />
        ),
        errorElement: <Error name={AppRoutes.auth.index} />,
        children: [
          {
            path: AppRoutes.auth.login,
            element: <AuthLogin />,
            errorElement: <Error name={AppRoutes.auth.login} />,
          },
        ],
      },
      {
        path: AppRoutes.home,
        element: <PrivateRoute isPrivate layout={MainLayout} />,
        errorElement: <Error name={AppRoutes.home} />,
        children: [
          {
            path: AppRoutes.dashboard,
            element: <Home />,
            errorElement: <Error name={AppRoutes.dashboard} />,
          },
          {
            path: AppRoutes.restaurent.index,
            element: <Restaurent />,
            errorElement: <Error name={AppRoutes.restaurent.index} />,
          },
          {
            path: AppRoutes.restaurent.detail,
            element: <RestaurentDetail />,
            errorElement: <Error name={AppRoutes.restaurent.detail} />,
          },
        ],
      },
    ],
    {
      basename: AppRoutes.home,
    }
  );
};
