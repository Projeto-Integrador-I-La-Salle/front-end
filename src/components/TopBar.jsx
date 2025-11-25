import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { getCookie } from "../services/cookies";

function TopBar() {
  const isAuthenticated = getCookie("token");

  return (
    <div className="w-full bg-gray-100 text-sm py-2 px-6 flex justify-between items-center">
      {/* Localização */}
      <div className="flex items-center gap-2 text-gray-600">
        <MapPin size={16} />
        <span>Av. Sapucaia, número 1346 / centro</span>
      </div>

      {/* Idioma, Moeda, Login */}
      <div className="flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          {!isAuthenticated &&
            <>
              <Link to="/login" className="cursor-pointer hover:text-red-600">
                Login
              </Link>
              /
              <Link to="/cadastro" className="cursor-pointer hover:text-red-600">
                Cadastre-se
              </Link>
            </>
          }
        </div>

      </div>
    </div>
  );
}
export default TopBar;
