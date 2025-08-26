import { Container } from "../../components/Container.component";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { ProductCard } from "../../components/ProductCard.component";
import TopBar from "../../components/TopBar";
import HomeIcon from '../../assets/icons/icon-home.svg'
import RightArrowVectorIcon from '../../assets/icons/icon-right-arrow-vector.svg'

export function ProductsPage() {
    const items = new Array(30).fill(0)

    return (
        <div>
            <TopBar />
            <MainHeader />
            <NavBar />
            <section className="bg-[#1D1616] h-24 flex gap-2 items-center text-gray-600 px-[10%]">
                <img src={HomeIcon} />
                <img src={RightArrowVectorIcon} />
                <p className="">Categorias</p>
                <img src={RightArrowVectorIcon} />
                <p className="text-red-500">Acessórios</p>
            </section>

            <Container>
                <div>
                    <div className="">Filtros horizontais</div>
                    <div className="flex">
                        <div className="w-[15%]">Filtro Vertical</div>
                        <div className="w-[85%] flex flex-wrap gap-5">{items?.map(function(item) {
                            return (
                                <ProductCard />
                            );
                        })}</div>
                    </div>
                </div>
            </Container>
        </div >
    );
}

