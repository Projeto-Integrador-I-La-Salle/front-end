import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import { Footer } from "../../components/Footer";
import { PopularCategories } from "./sections/PopularCategories";
import { PopularProducts } from "./sections/PopularProducts";

export function Homepage() {
    return (
        <div>
            <TopBar />
            <MainHeader />
            <NavBar />
            <PopularCategories />
            <PopularProducts />
            <Footer />
        </div>
    );
}

