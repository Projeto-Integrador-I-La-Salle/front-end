import { useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("cashOnShop");

  return (
    <div>
      <h2 className="font-semibold mb-4">Método de Pagamento </h2>

      <div className="space-y-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnShop"
            checked={selectedMethod === "cashOnShop"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="accent-red-500"
          />
          <span>Dinheiro</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="pix"
            checked={selectedMethod === "pix"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="accent-red-500"
          />
          <span>Pix</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="Cartão Crédito/Débito"
            checked={selectedMethod === "Cartão Crédito/Débito"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="accent-red-500"
          />
          <span>Cartão Crédito/Débito</span>
        </label>
      </div>
    </div>
  );
};

export { PaymentMethod };
