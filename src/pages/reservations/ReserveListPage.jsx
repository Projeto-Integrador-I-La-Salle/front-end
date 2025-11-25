import { Link } from "react-router";
import Cookies from "js-cookie";

import { removeCartItemById } from "../../services/storage/cart.js";

import { useCartProducts } from "../../hooks/useCartProducts.hook.js";

import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";
import { ProductRowReserve } from "../../components/ProductRowReserve.jsx";
import { Footer } from "../../components/Footer.jsx";

import { ChevronRightIcon, HomeIcon, ArrowRightIcon } from "lucide-react";

export function ReserveListPage() {
  const { products, setProducts } = useCartProducts();

  /**
   * @param {string} id
   * */
  function removeProduct(id) {
    if (!id) {
      throw new Error("Id should not be null or undefined.");
    }

    setProducts((prev) => prev.filter((item) => item.id !== id));
    removeCartItemById(id);
  }

  function handleContinueOrder() {
    if (products?.length > 0) {
      const productIds = products.map((p) => p.id);
      Cookies.set("reserved_products_ids", JSON.stringify(productIds));
      window.location.href = "/checando-pedido";
    }
  }

  function renderContinueWithOrderButton() {
    if (products?.length > 0) {
      return (
        <button
          onClick={handleContinueOrder}
          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-red-600 transition font-semibold">
          <Link to="/checando-pedido" className="flex gap-2">
            <span>Continuar com pedido</span> <ArrowRightIcon />
          </Link>
        </button>
      );
    }
  }

  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <section className="bg-[#1D1616] h-24 flex gap-2 items-center text-gray-400 px-[10%]">
        <HomeIcon />
        <ChevronRightIcon />
        <p className="text-red-500">Reservar Produtos</p>
      </section>

      <h1 className="text-2xl font-bold ml-44 text-gray-800 mb-6 mt-8">
        Meus Produtos Reserva
      </h1>

      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-5 font-semibold text-gray-600 border-b gap-x-44">
          <span>Produto</span>
          <span>Preço</span>
          <span>Quantidade</span>
          <span>SubTotal</span>
        </div>
        {products && products.length > 0 ? (
          products.map(function(product) {
            return (
              <ProductRowReserve
                key={product.id}
                product={product}
                onRemove={removeProduct}
              />
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-6">
            Adicione produtos na sacola para poder reservar.
          </p>
        )}
      </div>
      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mt-10 gap-4">
        {renderContinueWithOrderButton()}
      </div>
      <Footer />
    </div>
  );
}

