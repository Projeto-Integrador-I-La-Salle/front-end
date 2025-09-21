import { createBrowserRouter } from "react-router";
import { Homepage } from "../pages/home/home.page";
import { ProductsPage } from "../pages/products/products.page";
import { LoginPage } from "../pages/login/LoginPage";
import { RegisterPage } from "../pages/register/RegisterPage.jsx";
import { ProductDetailsPage } from "../pages/productDetails/ProductDetails.page.jsx";
import { WishlistPage } from "../pages/wishelist/WishlistPage.jsx";
import { ReserveListPage } from "../pages/reservations/ReserveListPage.jsx";
import { CheckOrderPage } from "../pages/checkOrder/CheckOrderPage.jsx";
import { getById } from "../api/products.api.js";
import { LoaderFallback } from "../../LoaderFallback.jsx";
import { AboutUsPage } from "../pages/about/AboutUsPage.jsx";


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
      const response = await getById(params?.id || "1");
      return { product: response?.data?.data };
    },
    Component: ProductDetailsPage,
    HydrateFallback: LoaderFallback
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/cadastro",
    Component: RegisterPage,
  },
  {
    path: "/desejos",
    Component: WishlistPage,
  },
  {
    path: "/carrinho-reservas",
    Component: ReserveListPage,
  },
  {
    path: "/checando-pedido",
    Component: CheckOrderPage,
  },
  {
    path: "/sobre",
    Component: AboutUsPage,
  },
]);

