import { Container } from "../../components/Container.component";
import { Footer } from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import fotoLoja from "../../assets/bg-loja.jpg";
import { ServicesCard } from "../../components/ServicesCard";
import servicesImage from "../../assets/services-img.png";

export function AboutUsPage() {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />

      <div>
        <Container /*SOBRE NÓS*/>
          <div className="flex items-center font-poppins mt-10 gap-12 p-12">
            <div className="w-1/2">
              <h1 className="text-6xl font-bold leading-tigh">
                Há 40 anos <br></br> no mercado!
              </h1>
              <p className="mt-4">
                Bem-vindo(a) à Moto Spectro Ltda, a sua loja de artigos e peças
                para motocicletas em Sapucaia do Sul, Rio Grande do Sul. Com uma
                avaliação de 4,6 estrelas baseada em mais de 350 avaliações, a
                Moto Spectro se destaca por oferecer um serviço de qualidade e
                uma ampla variedade de produtos para atender às necessidades dos
                motociclistas.
              </p>
            </div>
            <div className="w-1/2">
              <img src={fotoLoja} alt="" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </Container>

        <section className=" p-20">
          <div className="grid grid-cols-2 items-center">
            <img
              src={servicesImage}
              className="w-full h-auto rounded-lg"
              alt=""
            />

            <div className="flex flex-col pb-12 pt-12 items-center ">
              <h2 className="text-4xl font-semibold mb-8 text-center">
                O que temos pra você?
              </h2>

              <div className="grid grid-row-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <ServicesCard
                    title="Manutenção Leve"
                    description="Serviços de manutenções..."
                    fullDescription={
                      "Serviços de manutenções leves para sua motocicleta, incluindo troca de óleo, ajuste de freios, verificação de pneus e inspeção geral para garantir que sua moto esteja sempre em ótimas condições."
                    }
                  />
                  <ServicesCard
                    title="Equipamentos de Proteção"
                    description="Oferecemos uma variedade de equipamentos de proteção..."
                    fullDescription={
                      "Oferecemos uma ampla gama de equipamentos de proteção para motociclistas, incluindo capacetes, jaquetas, luvas e botas, todos projetados para garantir sua segurança e conforto durante suas viagens."
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ServicesCard
                    title="Peças e Acessórios"
                    description="Oferecemos uma variedade de peças e acessórios para motocicletas..."
                    fullDescription={
                      "Oferecemos uma ampla gama de peças e acessórios para motocicletas, incluindo filtros de óleo, pastilhas de freio, baterias e muito mais, todos com garantia de qualidade e procedência."
                    }
                  />
                  <ServicesCard
                    title="Vestuario para Motociclistas"
                    description="Oferecemos uma variedade de vestuário para motociclistas..."
                    fullDescription={
                      "Oferecemos uma ampla gama de vestuário para motociclistas, incluindo jaquetas, calças e luvas, todos projetados para garantir conforto e segurança durante suas viagens."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section /*LOCALIZAÇÃO*/>
          <div className="grid grid-cols-1 text-center items-center gap-4 p-36">
            <div className="font-poppins ">
              <h2 className="text-5xl font-bold leading-tigh">
                Onde estamos localizados?
              </h2>
              <p className="mt-2 text-xl">
                Nossa loja está situada em Sapucaia do Sul, RS, oferecendo fácil
                acesso para todos os motociclistas da região.
              </p>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.2660923859908!2d-51.154043699999995!3d-29.827740199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f373753e535%3A0x46d9ea01dea56946!2sMoto%20Spectro%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1757697673073!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span>Av. Sapucaia, número 1346 / centro</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
