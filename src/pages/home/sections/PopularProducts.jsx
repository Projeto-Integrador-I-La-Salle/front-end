import { useEffect } from "react";
import { ProductCard } from "../../../components/ProductCard.component";
import { useGetAllProducts } from "../../../hooks/getAllProducts.hook";

export function PopularProducts() {
    const { products, getAll } = useGetAllProducts();

    useEffect(() => {
        getAll();
    }, [getAll]);

    return (
        <div className="mx-[10%] font-poppins">
            <h1 className="my-5 font-semibold text-3xl">Produtos Populares</h1>

            <div
                className="
                    grid
                    gap-8
                    grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
                    select-none
                "
            >
                {products?.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        variant="grid"
                    />
                ))}
            </div>
        </div>
    );
}

