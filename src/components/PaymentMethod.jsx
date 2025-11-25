/**
 * @param {{ selectedMethod: string, setSelectedMethod: React.Dispatch<string>}} props
 */
function PaymentMethod({ selectedMethod, setSelectedMethod }) {
  const paymentMethods = [
    {
      id: 1,
      label: "Dinheiro",
      value: "dinheiro"
    },
    {
      id: 2,
      label: "Pix",
      value: "pix"
    },
    {
      id: 3,
      label: "Cartão Crédito / Débito",
      value: "cartao"
    }
  ];

  function handleChange(e) {
    setSelectedMethod(e.target.value)
  }

  return (
    <div>
      <h2 className="font-semibold mb-4">Método de Pagamento </h2>

      <div className="space-y-4">
        {paymentMethods.map(function(paymentMethod) {
          return (
            <label
              key={paymentMethod.id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="paymentMethod"
                value={paymentMethod.value}
                checked={selectedMethod === paymentMethod.value}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span>{paymentMethod.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export { PaymentMethod };
