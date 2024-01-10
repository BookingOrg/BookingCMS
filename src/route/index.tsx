import { createBrowserRouter } from "react-router-dom";
import { AuthLogin } from "../pages/auth/auth-login";
import { Home } from "../pages";
import { PrivateRoute } from "../components";
import { Error } from "../pages";
import { Restaurent, RestaurentDetail } from "../pages";
import { MainLayout } from "../layout";
import { WrapLayout } from "../layout/wrap-layout";
// import App from "../App";
import { AppRoutes } from "./AppRoutes";
export const routerCMS = () => {
  return createBrowserRouter(
    [
      {
        path: AppRoutes.auth.index,
        element: (
          <PrivateRoute isAuthRoute isPrivate={false} layout={WrapLayout} />
        ),
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.auth.login,
            element: <AuthLogin />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: AppRoutes.home,
        element: <PrivateRoute isPrivate layout={MainLayout} />,
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.dashboard,
            element: <Home />,
            errorElement: <Error />,
          },
          {
            path: AppRoutes.restaurent.index,
            element: <Restaurent />,
            errorElement: <Error />,
          },
          {
            path: AppRoutes.restaurent.detail,
            element: <RestaurentDetail />,
            errorElement: <Error />,
          },
        ],
      },
    ],
    {
      basename: AppRoutes.home,
    }
  );
};
