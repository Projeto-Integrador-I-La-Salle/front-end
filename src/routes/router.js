import { createBrowserRouter } from "react-router";
import { Homepage } from "../pages/home/home.page";
import { ProductsPage } from "../pages/products/products.page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Homepage,
    },
    {
        path: "/produtos",
        Component: ProductsPage,
    },
]);

