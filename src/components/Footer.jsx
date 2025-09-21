import logoSecundario from "../assets/logoSecundario.jpg";
import { TypographyBody } from "../components/typography/TypographyBody.component";
import { SectionIntersection } from "../components/Intersection.component";
import { Visa, Mastercard, Bradesco } from "react-pay-icons";

export function Footer() {
  return (
    <footer className="bg-black w-full mt-10 p-2">
      <div className="mt-5">
        <div className="container flex justify-center font-poppins mx-auto px-4 gap-32">
          <div className="flex gap-5 text-white">
            <img className="h-32" src={logoSecundario} alt="logo secundario" />
            <div>
              <h1 className="text-2xl font-bold">Moto Spectro</h1>
              <TypographyBody className="text-white mt-1">
                <TypographyBody.Medium>(51) 3065-1287</TypographyBody.Medium>
                <TypographyBody.Medium>ou</TypographyBody.Medium>
                <TypographyBody.Medium>
                  MotoSpecto@motospecas.com.br
                </TypographyBody.Medium>
              </TypographyBody>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 text-gray-300 ">
            <div className="">
              <h1 className="mb-2 text-white font-semibold">Conta</h1>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Desejos
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Sacola
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Entrar
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Registrar-se
                </a>
              </li>
            </div>
            <div className="">
              <h1 className="mb-2 text-white font-semibold">Sobre</h1>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Quem Somos
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Serviços
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Localização
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Parceiros
                </a>
              </li>
            </div>
            <div className="">
              <h1 className="mb-2 text-white font-semibold">Redes</h1>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Facebook
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Instagram
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Whatsapp
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Telegram
                </a>
              </li>
            </div>
            <div className="">
              <h1 className="mb-2 text-white font-semibold">Categorias</h1>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Acessórios
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Peças
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Vestimentas
                </a>
              </li>
              <li className="list-none">
                <a className="hover:text-white" href="">
                  Produtos Ativos
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="mt-10 w-3/4 mx-auto">
          <SectionIntersection />
        </div>
        <div className="flex justify-between w-3/4 mx-auto text-white">
          <h2>Desde 1985 - Sapucaia / RS</h2>
          <div className="flex gap-2">
            <Visa style={{ width: 50, height: 30 }} />
            <Mastercard style={{ width: 50, height: 30 }} />
            <Bradesco style={{ width: 50, height: 30 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
