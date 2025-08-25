import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import { PopularCategories } from "./sections/PopularCategories";

export function Homepage() {
    return (
        <div>
            <TopBar />
            <MainHeader />
            <NavBar />
            <PopularCategories />
        </div>
    );
}

