import React from "react";
import logoLoja from '../assets/logo-loja.png';
import { CircleUserIcon } from "lucide-react";

function NavBar() {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className=" mx-5 flex justify-between items-center">
        {/* Título da Loja */}
        <div> 
          <img className="h-12" src={logoLoja} alt="logo da loja" />
        </div>
        <div className="text-xl font-bold">
          <h2>Moto Spectro</h2>
        </div>

        {/* Menu de Navegação */}
        <ul className="flex space-x-10 font-bold">
          {/* Item do menu com dropdown */}
          <li className="relative group">
            <a href="#" className="flex items-center">
              Produtos <span className="ml-1">&#9660;</span>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-600 hover:text-white rounded-t-md"
                >
                  Acessórios
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-red-600 hover:text-white">
                  Capacetes
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-red-600 hover:text-white">
                  Jaquetas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-600 rounded-b-md hover:text-white"
                >
                  Luvas
                </a>
              </li>
            </ul>
          </li>

          {/* Outros itens do menu */}
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#" >
              <CircleUserIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { NavBar };
