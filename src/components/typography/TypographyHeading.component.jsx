import React from "react";
import { getFontWeight } from "../../utils";

export function TypographyHeading({ children, weight = 400, variation }) {
  const TagName = `h${variation}`;

  const fontWeight = getFontWeight(weight);
  const fontSize = getFontSize(variation);

  function getFontSize(variation) {
    if (variation === 1) {
      return 'text-6xl';
    }
    if (variation === 2) {
      return 'text-5xl';
    }
    if (variation === 3) {
      return 'text-4xl';
    }
    if (variation === 4) {
      return 'text-3xl';
    }
    if (variation === 5) {
      return 'text-2xl';
    }
  }

  return (
    <TagName className={`font-poppins text-gray-900 ${fontWeight} ${fontSize}`}>
      {children}
    </TagName >
  );
}

