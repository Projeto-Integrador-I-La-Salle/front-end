import { PhoneIcon } from "lucide-react";
function NavBar() {
  return (
    <nav className="bg-red-700 p-1 shadow-lg flex">
      <div className="container mx-20">
        {/* Menu de Navegação */}
        <ul className="flex space-x-5 text-white">
          {/* Item do menu com dropdown */}
          <li className="relative group">
            <a href="#" className="flex items-center">
              Produtos <span className="ml-1">&#9660;</span>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-2 w-48 bg-red-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-600 rounded-t-md"
                >
                  Acessórios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-600 hover:text-white"
                >
                  Capacetes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-600 hover:text-white"
                >
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
            <a href="#">Sobre-nos</a>
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
