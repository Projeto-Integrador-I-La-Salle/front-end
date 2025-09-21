import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";
import { ProductRowReserve } from "../../components/ProductRowReserve.jsx";
import luvas from "../../assets/img-luva.webp";
import capacete from "../../assets/img-capacete.jpg";
import { ChevronRightIcon, HomeIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Footer } from "../../components/Footer.jsx";
import Cookies from "js-cookie";

export function ReserveListPage() {
  //Lista de produtos para teste de renderização. Posteriormente tera que conectar ao banco.
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Luvas antederrapante",
      image: luvas,
      price: 10.0,
    },
    {
      id: 2,
      name: "Capacete Escamoteavel",
      image: capacete,
      price: 299.0,
    },
  ]);

  function removeProduct(id) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  }
  console.log("Products:", products);

  function handleContinueOrder() {
    if (products.length > 0) {
      const productIds = products.map((p) => p.id);
      Cookies.set("reserved_products_ids", JSON.stringify(productIds));
      window.location.href = "/checando-pedido";
    } else {
      document.alert("Não a produtos em seu carrinho.");
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
        {products.length > 0 ? (
          products.map((props) => (
            <ProductRowReserve
              key={props.id}
              {...props}
              onRemove={removeProduct}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">
            Adicione produtos na sacola para poder reservar.
          </p>
        )}
      </div>
      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mt-10 gap-4">
        <button
        onClick={handleContinueOrder} 
        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-red-600 transition font-semibold">
          <span>Continuar com pedido</span> <ArrowRightIcon />
        </button>
      </div>
      <Footer />
    </div>
  );
}
