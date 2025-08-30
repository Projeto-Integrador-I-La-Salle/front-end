import logoLoja from "../assets/logo-loja.png";
import { Heart, ShoppingBag, Search } from "lucide-react";

function MainHeader() {
  return (
    <div className="w-full flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex space-x-3">
        <a href="/">
          <img className="h-12 hover:opacity-85 transition duration-250 ease-in-out" src={logoLoja} alt="logo da loja" />
        </a>
        <h1 className="text-2xl font-bold p-2">Moto Spectro</h1>
      </div>

      {/* Barra de busca */}
      <div className="flex w-1/2 border rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Pesquise produtos"
          className="w-full px-4 py-2 outline-none"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 flex items-center gap-2">
          <Search size={18} />
        </button>
      </div>

      {/* Favoritos e Carrinho */}
      <div className="flex items-center gap-6">
        <a href="/desejos">
          <Heart className="cursor-pointer hover:text-red-600" size={22} />
        </a>
        <a href="/reservas" className="relative flex items-center gap-2 cursor-pointer">
          <ShoppingBag size={22} className="hover:text-red-600" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

          </span>
        </a>
      </div>
    </div>
  );
}
export default MainHeader;
