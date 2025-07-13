import AuthLayout from "@/app/layouts/auth-layout";
import MainLayout from "@/app/layouts/main-layout";
import ProtectedLayout from "@/app/layouts/protected-layout";
import AuthPage from "@/pages/auth.page";
import MainPage from "@/pages/main.page";
import { AUTH_PAGE, MAIN_PAGE } from "@/shared/consts/links";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            element: <AuthPage />,
            path: AUTH_PAGE,
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            element: <MainPage />,
            path: MAIN_PAGE,
          },
        ],
      },
    ],
  },
]);
