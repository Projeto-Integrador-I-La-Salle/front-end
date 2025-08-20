import { useState } from "react";
import  inbox from "..icons/inbox.svg";
import  send from "..icons/send.svg";
import  spam from "..icons/spam.svg";
import  trash from "..icons/delete.svg";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Botão para abrir/fechar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 m-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        {isOpen ? "←" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-48" : "w-16"
        } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col items-center py-6`}
      >
        {/* Botões */}
        <div className="flex flex-col gap-4 mt-8 w-full">
          <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <inbox className="w-6 h-6" />
            {isOpen && <span>Home</span>}
          </button>

          <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <send className="w-6 h-6" />
            {isOpen && <span>Perfil</span>}
          </button>

          <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <spam className="w-6 h-6" />
            {isOpen && <span>Configurações</span>}
          </button>

          <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <trash className="w-6 h-6" />
            {isOpen && <span>Sobre</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;