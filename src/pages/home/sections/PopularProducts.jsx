import { ProductCard } from "../../../components/ProductCard.component";

export function PopularProducts() {
    const items = [1, 2, 3, 4, 5];

    return (
        <div className="mx-[10%] font-poppins">
            <h1 className="my-5 font-semibold text-3xl">Produtos Populares</h1>
            <div className="flex select-none">
                {items?.map(function(item) {
                    return <ProductCard />
                })}
            </div>
        </div>
    );
}

