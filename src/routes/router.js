import { createBrowserRouter } from "react-router";
import { Homepage } from "../pages/home/home.page";
import { ProductsPage } from "../pages/products/products.page";
import { LoginPage } from "../pages/login/LoginPage";
import { RegisterPage } from "../pages/register/RegisterPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/produtos",
    Component: ProductsPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/cadastro",
    Component: RegisterPage,
  },
]);
