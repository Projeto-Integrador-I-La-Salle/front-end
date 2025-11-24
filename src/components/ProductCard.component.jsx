import { useState } from 'react';

import '../types/global'

import { TypographyBody } from './typography/TypographyBody.component';

import {
  addItemToWishlist,
  getWishlistItemById,
  removeWishlistItemById
} from '../services/storage';

import BagNoneIcon from '../assets/icons/icon-bag-none.svg'
import FavoriteDefaultIcon from '../assets/icons/icon-heart-default-vector.svg'
import FavoriteRedIcon from '../assets/icons/icon-heart-red-vector.svg'
import imgUnavailableProduct from "../assets/img-unavailable-product.webp";

/**
 * @param {{ product: ProductType, size?: number }} props
 */
export function ProductCard({ product, size = 4, variant = "default" }) {
  const [isHovering, setIsHovering] = useState(false);
  const hasStars = false;

  const isGrid = variant === "grid";

  return (
    <a
      href={`/produtos/${product.id}`}
      className={
        isGrid
          ? `
            border rounded-xl p-3 shadow-sm bg-white
            flex flex-col gap-3
            transition-all duration-300
            hover:shadow-lg hover:border-[#8E1616]
            relative
          `
          : `
            border h-[250px] w-[200px] flex flex-col items-center justify-between p-2
            shadow-md
            transition-colors duration-300 ease-in-out
            hover:border-[#8E1616]
            hover:shadow-xl
            relative
            ${size === 4 && 'rounded-lg'}
          `
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <FavoriteButton product={product} />}

      <img
        src={product?.imagens?.[0]?.url || imgUnavailableProduct}
        className={
          isGrid
            ? "w-full h-40 object-contain rounded-md transition-transform duration-300 hover:scale-105"
            : "w-[70%] rounded-md hover:scale-105 transition duration-300"
        }
      />

      <div
        className={
          isGrid
            ? "flex flex-col gap-1"
            : "w-[100%] flex justify-between items-center"
        }
      >
        <div>
          <TypographyBody weight={400}>
            <TypographyBody.Small>
              <span className={isGrid ? "line-clamp-2" : ""}>
                {product?.nome}
              </span>
            </TypographyBody.Small>
          </TypographyBody>

          <TypographyBody weight={500}>
            <TypographyBody.Medium>
              R${product?.preco.toString().replace('.', ',')}
            </TypographyBody.Medium>
          </TypographyBody>

          {hasStars && <div>estrelhinas</div>}
        </div>

        {!isGrid && (
          <img src={BagNoneIcon} className="w=[40px] h-[40px]" />
        )}
      </div>

      {isGrid && (
        <img
          src={BagNoneIcon}
          className="w-8 h-8 absolute bottom-3 right-3 opacity-70"
        />
      )}
    </a>
  );
}

/**
 * @param {{ product: ProductType }} product
 */
function FavoriteButton({ product }) {
  const favorited = getWishlistItemById(product.id);
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleFavoriteButtonClick(e) {
    e.preventDefault();     // evita que o <a> navegue
    e.stopPropagation();    // evita que o evento suba
    setIsFavorited(!isFavorited);

    getWishlistItemById(product.id)
      ? removeWishlistItemById(product.id)
      : addItemToWishlist(product);
  }

  return (
    <button
      type="button"
      onClick={handleFavoriteButtonClick}
      className="
        absolute right-2 top-2 
        p-2 rounded-full border bg-white shadow-sm
        transition-colors duration-300
        hover:bg-red-100
        z-20
        cursor-pointer
      "
    >
      <img
        src={isFavorited ? FavoriteRedIcon : FavoriteDefaultIcon}
        className="w-[20px] h-[20px]"
      />
    </button>
  );
}

