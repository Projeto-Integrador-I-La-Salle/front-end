import { TypographyBody } from "./typography/TypographyBody.component";
import IconPlus from '../assets/icons/icon-plus.svg';
import IconMinus from '../assets/icons/icon-minus.svg';

/**
 * Renders a quantity control button.
 *
 * @component
 * @param {number} availableStockQuantity The amount of available units in stock.
 * @param {number} currentQuantity
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentQuantity
 * @returns {ReactNode} A React element displaying the desired quantity control button.
 */
export function Quantity({ availableStockQuantity, currentQuantity, setCurrentQuantity }) {
  function handleIncreaseQuantityButtonClick() {
    if (currentQuantity >= availableStockQuantity) {
      return;
    }

    setCurrentQuantity(currentQuantity + 1);
  }

  function handleDecreaseQuantityButtonClick() {
    if (currentQuantity === 1) {
      return;
    }

    setCurrentQuantity(currentQuantity - 1);
  }

  return (
    <div className="flex p-2 items-center border w-32 justify-between rounded-full">
      <button
        onClick={handleDecreaseQuantityButtonClick}
        className="px-3 py-4 rounded-[100%] bg-gray-50 hover:shadow-[0_0_0_2px_#000000]
        transition-shadow duration-200
        "
      >
        <img src={IconMinus} />
      </button>
      <TypographyBody className="text-black">
        <TypographyBody.Medium>
          {currentQuantity}
        </TypographyBody.Medium>
      </TypographyBody>
      <button
        onClick={handleIncreaseQuantityButtonClick}
        className="p-3 rounded-[100%] bg-gray-50 hover:shadow-[0_0_0_2px_#000000]
        transition-shadow duration-200"
      >
        <img src={IconPlus} />
      </button>
    </div>
  );
}

