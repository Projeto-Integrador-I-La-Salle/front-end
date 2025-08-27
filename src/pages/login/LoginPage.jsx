import LoginBox from "../../components/LoginBox.jsx";
import fundo from "../assets/bg-loja.jpg";
import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";

function LoginPage() {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <div
        className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div
          name="camada transparente"
          className="absolute inset-0 bg-black opacity-50"
        ></div>
        <div className="relative z-10 p-8 rounded-lg shadow-lg bg-opacity-90 max-w-md w-full -top-20">
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
export { LoginPage };
