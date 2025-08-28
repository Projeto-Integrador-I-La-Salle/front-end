import { TypographyBody } from "./typography/TypographyBody.component";

/**
 * Renders a stock status component.
 *
 * @component
 * @param {boolean} hasStock Boolean value indicating if the product has stock or not.
 * @returns {ReactNode} A React element displaying the StockStatus component.
 */
export function StockStatus({ hasStock }) {
  const textContent = hasStock ? 'Em Estoque' : 'Sem Estoque';

  return (
    <div className="bg-[#20B526] w-24 text-center rounded-md bg-opacity-20 shadow-sm p-1">
      <TypographyBody className="text-branding-success-dark text-shadow-lg">
        <TypographyBody.Small>
          {textContent}
        </TypographyBody.Small>
      </TypographyBody>
    </div>
  );
}

