import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";
import { ProductRow } from "../../components/ProductRow.jsx";
import luvas from "../../assets/img-luva.webp";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { useState } from "react";

function WishlistPage() {
  //Lista de produtos para teste de renderização. Posteriormente tera que conectar ao banco.
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Luvas antederrapante",
      image: luvas,
      price: "R$10.00",
      status: "Em estoque",
    },
    {
      id: 2,
      name: "Luvas antederrapante",
      image: luvas,
      price: "R$10.00",
      status: "Em estoque",
    },
    {
      id: 3,
      name: "Luvas antederrapante",
      image: luvas,
      price: "R$10.00",
      status: "Em estoque",
    },
  ]);

  function removeProduct(id) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  }
  console.log("Products:", products);

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
        {products.length > 0 ? (
          products.map((props) => (
            <ProductRow
              key={props.id}
              {...props}
              onRemove={removeProduct}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">
            Ainda não a produtos que você deseje.
          </p>
        )}
      </div>
    </div>
  );
}

export { WishlistPage };
