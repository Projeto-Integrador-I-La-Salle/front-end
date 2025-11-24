import { useContext, useEffect, useState } from "react";

import { getWishlist, removeWishlistItemById } from "../../services/storage.js";

import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";
import { ProductRow } from "../../components/ProductRow.jsx";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { Footer } from "../../components/Footer.jsx";
import { LoaderContext } from "../../contexts/LoaderContext.jsx";


function WishlistPage() {
  const [products, setProducts] = useState(getWishlist()?.products);
  const { setIsLoading } = useContext(LoaderContext);

  useEffect(function() {
    setIsLoading(false);
  }, [setIsLoading]);

  /**
   * @param {string} id - The product identifier.
   * */
  function removeProduct(id) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    removeWishlistItemById(id);
  }

  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <section className="bg-[#1D1616] h-24 flex gap-2 items-center text-gray-400 px-[10%]">
        <HomeIcon />
        <ChevronRightIcon />
        <p className="text-red-500">Produtos Desejados</p>
      </section>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-8">
        Lista de Desjos
      </h1>
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-4 font-semibold text-gray-600 border-b ">
          <span>Produto</span>
          <span>Preço</span>
          <span>Status</span>
          <span className="text-right">Remover</span>
        </div>
        {products && products?.length > 0 ? (
          products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onRemove={removeProduct}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">
            Ainda não há produtos que você deseje.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export { WishlistPage };
