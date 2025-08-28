import { TypographyBody } from "./typography/TypographyBody.component";

/**
 * Renders a discount tag.
 *
 * @component
 * @param {number} value The percentage's number of the discount.
 * @returns {ReactNode} A React element displaying the discount tag component.
 */
export function DiscountTag({ value }) {
  return (
    <div className="px-3 py-1 w-18 bg-branding-error bg-opacity-10 rounded-2xl">
      <TypographyBody weight={500} className="text-branding-error">
        <TypographyBody.Small>
          {value}% Off
        </TypographyBody.Small>
      </TypographyBody>
    </div >
  );
}

