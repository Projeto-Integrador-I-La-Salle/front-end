import { useEffect } from "react";
import { ProductCard } from "../../../components/ProductCard.component";
import { useGetAllProducts } from "../../../hooks/getAllProducts.hook";

export function PopularProducts() {
    const { products, getAll } = useGetAllProducts();

    useEffect(function() {
        getAll();
    }, [getAll]);

    return (
        <div className="mx-[10%] font-poppins">
            <h1 className="my-5 font-semibold text-3xl">Produtos Populares</h1>
            <div className="flex select-none">
                {products?.map(function(product) {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    );
                })}
            </div>
        </div>
    );
}

