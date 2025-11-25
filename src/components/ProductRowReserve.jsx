import { useState } from "react";

import { QuantitySelector } from "../components/QuantitySelector";

import { CircleXIcon } from "lucide-react";

/**
 * @type number
 * */
const MINIMUM_ITEM_QUANTITY = 1;

/**
 * @type number
 * */
const FRACTION_DIGITS_DECIMAL_HOUSE = 2;

/**
 * @param {{ product: ProductType, onRemove: (id: string) => void}} props
 */
function ProductRowReserve({ product, onRemove }) {
  const finalPriceInitialState = parseFloat(product?.preco * product?.quantidade);
  const [finalPrice, setFinalPrice] = useState(finalPriceInitialState);
  const initialPrice = parseFloat(product?.preco);

  return (
    <div className="grid grid-cols-5 items-center py-4 border-b last:border-b-0 gap-x-44">
      <div className="flex items-center gap-3">
        <img
          src={product?.imagens?.[0]?.url}
          alt={product?.nome}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <span className="font-medium text-gray-700">{product?.nome}</span>
      </div>

      <div>
        <span className="font-semibold text-gray-900">
          R${initialPrice?.toFixed(FRACTION_DIGITS_DECIMAL_HOUSE)}
        </span>
      </div>

      <QuantitySelector
        initial={product?.quantidade}
        min={MINIMUM_ITEM_QUANTITY}
        max={product?.qtdEstoque}
        initialPrice={initialPrice}
        price={finalPrice}
        finalPrice={setFinalPrice}
      />
      <span>R${finalPrice?.toFixed(FRACTION_DIGITS_DECIMAL_HOUSE)}</span>

      <div className="flex justify-end">
        <button
          onClick={function() {
            onRemove(product?.id)
          }}
          className="flex text-gray-400 hover:text-red-500 text-xl"
        >
          <CircleXIcon />
        </button>
      </div>
    </div>
  );
}

export { ProductRowReserve };

