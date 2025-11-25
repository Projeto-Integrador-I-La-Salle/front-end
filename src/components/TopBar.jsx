import { MapPin } from "lucide-react";

function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm py-2 px-6 flex justify-between items-center">
      {/* Localização */}
      <div className="flex items-center gap-2 text-gray-600">
        <MapPin size={16} />
        <span>Av. Sapucaia, número 1346 / centro</span>
      </div>

      {/* Idioma, Moeda, Login */}
      <div className="flex items-center gap-4 text-gray-600">
        <span className="cursor-pointer hover:text-red-600">Login / Cadastre-se</span>
      </div>
    </div>
  );
}
export default TopBar;
