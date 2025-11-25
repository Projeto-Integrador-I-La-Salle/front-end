import { Container } from "../../components/Container.component";
import TopBar from "../../components/TopBar";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { InputBox } from "../../components/inputBox";
import { TypographyHeading } from "../../components/typography/TypographyHeading.component";
import { ProductRowFinalOrder } from "../../components/ProductRowFinalOrder";
import { PaymentMethod } from "../../components/PaymentMethod";
import { SectionPage } from "../../components/SectionPage";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { useCartProducts } from "../../hooks/useCartProducts.hook";

export function CheckOrderPage() {
  const { products } = useCartProducts();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [retrievalDate, setRetrievalDate] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      contact,
      retrievalDate,
      orderNotes,
    };
  };

  function calculateTotalPriceWithQuantity() {
    const total = products.reduce(function(accumulator, currentProduct) {
      const itemTotal = currentProduct.preco * currentProduct.quantidade;
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
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-5 gap-5">
          <div className="p-3">
            <TypographyHeading weight={500} variation={5}>
              Preencha o formulario:
            </TypographyHeading>

            <Container>
              <div className="flex mt-5 gap-10">
                <div className="first-name">
                  <InputBox
                    label={"Nome"}
                    placeholeder={"Seu nome"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="last-name">
                  <InputBox
                    label={"Sobrenome"}
                    placeholeder={"Seu sobrenome"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex mt-5 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Contato
                  </label>
                  <input
                    type="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
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
                    value={retrievalDate}
                    onChange={(e) => setRetrievalDate(e.target.value)}
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
                  placeholder="Ex: Preferência de retirada à tarde"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-100 rounded-md p-8 w-full max-w-sm">
              <TypographyHeading weight={500} variation={5}>
                Sumário
              </TypographyHeading>
              <div className="mt-5">
                {products && products.length > 0 &&
                  products.map(function(product) {
                    return (
                      <ProductRowFinalOrder
                        key={product.id}
                        product={product}
                      />
                    );
                  })
                }
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
                <button
                  type="submit"
                  className="mt-5 items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-red-700 transition font-semibold w-full"
                >
                  Confirmar Reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

