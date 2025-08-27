import { PhoneIcon } from "lucide-react";
function NavBar() {
  return (
    <nav className="bg-red-700 p-1 shadow-xl flex">
      <div className="container mx-20">
        {/* Menu de Navegação */}
        <ul className="flex space-x-5 text-white">
          {/* Item do menu com dropdown */}
          <li className="relative group">
            <a href="#" className="flex items-center">
              Produtos <span className="ml-1">&#9660;</span>
            </a>
            <span className="after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:scale-x-0 group-hover:after:scale-x-100 after:top-6"></span>

            {/* Dropdown Menu */}
            <ul className="z-50 absolute left-0 mt-2 w-48 bg-red-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
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
          </li>

          {/* Outros itens do menu */}
          <li className="relative group">
            <a href="#">Ofertas</a>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-12"></span>
          </li>
          <li className="relative group">
            <a href="#">Sobre-MotoSpectro</a>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-12"></span>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 mr-4 text-white">
        <PhoneIcon size={18} />
        <h2 className="font-medium">(51)9987-3571</h2>
      </div>
    </nav>
  );
}

export { NavBar };
