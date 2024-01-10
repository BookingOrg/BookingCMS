export const AppRoutes = {
  404: "/404",
  home: "/",
  dashboard: "/dashboard",
  auth: {
    index: "/auth",
    login: "/auth/login",
    forgotPassword: "/auth/forgot-password",
  },
  restaurent: {
    index: "/restaurent-management",
    create: "/restaurent-management/create",
    detail: "/restaurent-management/detail/:id",
    detailId: (id: string) => `/restaurent-management/detail/${id}`,
    edit: "/restaurent-management/edit/:id",
    editId: (id: string) => `/restaurent-management/edit/${id}`,
  },
};
