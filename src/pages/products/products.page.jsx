import { useEffect } from "react";
import { Container } from "../../components/Container.component";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { ProductCard } from "../../components/ProductCard.component";
import TopBar from "../../components/TopBar";
import HomeIcon from '../../assets/icons/icon-home.svg'
import RightArrowVectorIcon from '../../assets/icons/icon-right-arrow-vector.svg'
import { Paginator } from "../../components/Paginator.component";
import { useGetAllProducts } from "../../hooks/getAllProducts.hook";

export function ProductsPage() {
    const { products, getAll, aditionalInfo } = useGetAllProducts();

    useEffect(function() {
        getAll();
    }, []);

    return (
        <div>
            <TopBar />
            <MainHeader />
            <NavBar />
            <section className="bg-[#1D1616] h-24 flex gap-2 items-center text-gray-400 px-[10%]">
                <img src={HomeIcon} />
                <img src={RightArrowVectorIcon} />
                <p className="">Categorias</p>
                <img src={RightArrowVectorIcon} />
                <p className="text-red-500">Acessórios</p>
            </section>

            <Container>
                <div className="my-5">
                    <div className="flex justify-between my-5">
                        Filtros horizontais
                        <div className="flex gap-1">
                            <p className="text-gray-900 font-bold">{aditionalInfo?.total}</p>
                            <p className="text-gray-600">Resultados Encontrados</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[15%]">Filtro Vertical</div>
                        <div className="w-[85%] flex flex-wrap gap-5 justify-center">
                            {products?.map(function(product) {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        size={4}
                                    />
                                );
                            })}
                            <Paginator />
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}

