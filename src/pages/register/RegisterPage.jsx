import RegisterBox from "../../components/RegisterBox.jsx";
import fundo from "../../assets/bg-loja.jpg";
import TopBar from "../../components/TopBar.jsx";
import MainHeader from "../../components/MainHeader.jsx";
import { NavBar } from "../../components/NavBar.jsx";
import { Footer } from "../../components/Footer.jsx";

function RegisterPage() {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <div
        className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 rounded-lg shadow-lg  max-w-md w-full -top-20">
          <RegisterBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { RegisterPage };
