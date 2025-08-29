import { useState } from "react";
import { CircleXIcon } from "lucide-react";
import { QuantitySelector } from "../components/QuantitySelector";

function ProductRowReserve({ id, name, image, price, onRemove }) {
  const [finalPrice, setFinalPrice] = useState(price);
  const initialPrice = price;

  return (
    <div className="grid grid-cols-5 items-center py-4 border-b last:border-b-0 gap-x-44">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <span className="font-medium text-gray-700">{name}</span>
      </div>

      <div>
        <span className="font-semibold text-gray-900">
          R${initialPrice.toFixed(2)}
        </span>
      </div>

      <QuantitySelector
        initial={1}
        min={1}
        max={10}
        initialPrice={initialPrice}
        price={finalPrice}
        finalPrice={setFinalPrice}
      />
      <span>R${finalPrice.toFixed(2)}</span>

      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log("btn Clicado")
            onRemove(id)}}
          className="flex text-gray-400 hover:text-red-500 text-xl"
        >
          <CircleXIcon />
        </button>
      </div>
    </div>
  );
}

export { ProductRowReserve };
