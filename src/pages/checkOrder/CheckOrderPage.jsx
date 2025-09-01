import { Container } from "../../components/Container.component";
import TopBar from "../../components/TopBar";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { InputBox } from "../../components/inputBox";
import { TypographyHeading } from "../../components/typography/TypographyHeading.component";
import { ProductRowFinalOrder } from "../../components/ProductRowFinalOrder";
import luvas from "../../assets/img-luva.webp";
import capacete from "../../assets/img-capacete.jpg";
import { PaymentMethod } from "../../components/PaymentMethod";
import { SectionPage } from "../../components/SectionPage";

function CheckOrderPage() {
  const products = [
    {
      id: 1,
      name: "Luvas antederrapante",
      image: luvas,
      quantity: 2,
      price: 10.0,
    },
    {
      id: 2,
      name: "Capacete Escamoteavel",
      image: capacete,
      quantity: 1,
      price: 299.0,
    },
  ];
  function calculateTotalPriceWithQuantity() {
    const total = products.reduce((accumulator, currentProduct) => {
      const itemTotal = currentProduct.price * currentProduct.quantity;
      return accumulator + itemTotal;
    }, 0);
    return total;
  }

  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <SectionPage p={"Checkout"} />

      <div className="flex justify-center mt-10 gap-5">
        <div className="p-3">
          <TypographyHeading weight={500} variation={5}>
            Preencha o formulario:
          </TypographyHeading>
          <Container>
            <div className="flex mt-5 gap-10">
              <div className="first-name">
                <InputBox label={"Nome"} placeholeder={"Seu nome"} />
              </div>
              <div className="last-name">
                <InputBox label={"Sobrenome"} placeholeder={"Seu sobrenome"} />
              </div>
            </div>
            <div className="flex mt-5 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Contato
                </label>
                <input
                  type="tel"
                  placeholder="Ex: (51) 999873573"
                  className="w-full px-4 py-2 border border-gray-100 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Data para retirada
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border text-gray-500 border-gray-100 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
            </div>
          </Container>

          <div className="mt-10 mb-5 border-b border-gray-300"></div>

          <TypographyHeading weight={500} variation={5}>
            Informações adicionais:
          </TypographyHeading>
          <div className="p-4 max-w-2xl mx-auto">
            <div className="mb-4">
              <label
                htmlFor="order-notes"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Anotações do pedido (opcional)
              </label>
              <textarea
                id="order-notes"
                name="order-notes"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 "
                placeholder="Ex: Preferencia de retirada tarde"
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-gray-100 rounded-md p-8 w-full max-w-sm">
            <TypographyHeading weight={500} variation={5}>
              Summery
            </TypographyHeading>
            <div className="mt-5">
              {products.map((props) => (
                <ProductRowFinalOrder key={props.id} {...props} />
              ))}
            </div>

            <div className="mt-5 mb-5 border-b border-gray-300"></div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>R${calculateTotalPriceWithQuantity()}</span>
            </div>
            <div className="mt-5">
              <PaymentMethod />
            </div>
            <div>
              <button className="mt-5 items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-red-700 transition font-semibold w-full">
                Confirmar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { CheckOrderPage };
