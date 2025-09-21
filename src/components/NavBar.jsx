import { useState } from "react";
import { useNavigate } from "react-router";

import { PhoneIcon, ChevronDownIcon } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleProductClick() {
    navigate('/produtos');
  }

  return (
    <nav className="bg-red-700 p-1 shadow-xl flex">
      <div
        onMouseEnter={function() {
          setOpen(true)
        }}
        onMouseLeave={function() {
          setOpen(false)
        }}
        className="container mx-20"
      >
        {/* Menu de Navegação */}
        <ul className="flex space-x-5 text-white">
          <li className="relative">
            <button
              onClick={handleProductClick}
              className="flex items-center focus:outline-none group"
            >
              Produtos
              <ChevronDownIcon className="ml-1 mt-0.5" />
              <span
                className={`absolute left-8 top-6 h-0.5 w-12 -translate-x-1/2 bg-white transition-transform duration-300
                ${open
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100 group-hover:scale-x-100"
                  }`}
              ></span>
            </button>

            {/* Dropdown Menu */}
            {open && (
              <>
                <ul className="z-50 absolute left-0 mt-2 w-48 bg-red-700 rounded-md shadow-lg">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-red-600 rounded-t-md"
                    >
                      Acessórios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-red-600">
                      Capacetes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-red-600">
                      Jaquetas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-red-600 rounded-b-md"
                    >
                      Luvas
                    </a>
                  </li>
                </ul>

                {/* Bridge invisível para manter hover ativo */}
                <div className="absolute left-0 top-full w-48 h-2"></div>
              </>
            )}
          </li>

          {/* Outros itens do menu */}
          <li className="relative group">
            <a href="#">Ofertas</a>
            <span className="top-6 absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-12"></span>
          </li>
          <li className="relative group">
            <a href="#">Sobre</a>
            <span className="top-6 absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-12"></span>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2 mr-4 text-white">
        <PhoneIcon size={18} />
        <h2 className="font-medium">(51)9987-3571</h2>
      </div>
    </nav >
  );
}

export { NavBar };

