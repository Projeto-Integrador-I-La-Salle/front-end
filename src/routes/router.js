import { createBrowserRouter } from "react-router";
import { Homepage } from "../pages/home/home.page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Homepage,
    },
]);


