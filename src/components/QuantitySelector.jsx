import { useState } from "react";
import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";

function QuantitySelector({
  initial = 1,
  min = 1,
  max = 10,
  initialPrice,
  price,
  finalPrice,
}) {
  const [quantity, setQuantity] = useState(initial);

  const decrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      finalPrice(price - initialPrice);
    }
  };

  const increase = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      finalPrice(price + initialPrice);
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full w-fit px-2 py-1 shadow-sm">
      <button onClick={decrease} className="hover:text-red-600">
        <CircleMinusIcon />
      </button>
      <span className="m-1">{quantity}</span>
      <button onClick={increase} className="hover:text-green-500">
        <CirclePlusIcon />
      </button>
    </div>
  );
}

export { QuantitySelector };
