import { createBrowserRouter } from "react-router";
import { Homepage } from "../pages/home/home.page";
import { ProductsPage } from "../pages/products/products.page";
import { LoginPage } from "../pages/login/LoginPage";
import { RegisterPage } from "../pages/register/RegisterPage.jsx";
import { ProductDetailsPage } from "../pages/productDetails/ProductDetails.page.jsx";

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
    path: "/produtos/:id",
    loader: async ({ params }) => {
      //const data = await fetch();
      return {};
    },
    Component: ProductDetailsPage,
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

