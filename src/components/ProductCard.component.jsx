import imgLuva from '../assets/img-luva.webp';
import { TypographyBody } from './typography/TypographyBody.component';
import BagNoneIcon from '../assets/icons/icon-bag-none.svg'
import FavoriteDefaultIcon from '../assets/icons/icon-heart-default-vector.svg'
import FavoriteRedIcon from '../assets/icons/icon-heart-red-vector.svg'
import { useState } from 'react';
import { addItemToWishlist, getWishlistItemById, removeWishlistItemById } from '../services/storage';
import '../types/global'

/**
 * @param {{ product: ProductType, size?: number }} props
 */
export function ProductCard({ product, size = 4 }) {
  const [isHovering, setIsHovering] = useState(false);
  const hasDiscount = false;
  const hasStars = false;

  return (
    <a
      href={'#'}
      className={`border h-[250px] w-[200px] flex flex-col items-center justify-between p-2
                    shadow-md
                    transition-colors duration-300 ease-in-out
                    hover:border-[#8E1616]
                    hover:shadow-xl
                    relative
                    ${size === 4 && 'rounded-lg'}
      `}
      onMouseEnter={function() {
        setIsHovering(true);
      }}
      onMouseLeave={function() {
        setIsHovering(false);
      }}
    >
      {hasDiscount &&
        <div>Desconto 50%</div>
      }
      {isHovering &&
        <FavoriteButton productId={product?.id} />
      }
      <img src={product?.imagens[0].url || imgLuva} className='w-[70%] rounded-md' />
      <div className='w-[100%] flex justify-between items-center'>
        <div>
          <TypographyBody weight={400}>
            <TypographyBody.Small>
              {product?.nome}
            </TypographyBody.Small>
          </TypographyBody>
          <TypographyBody weight={500}>
            <TypographyBody.Medium>
              R${product?.preco.toString().replace('.', ',')}
            </TypographyBody.Medium>
          </TypographyBody>
          {hasStars &&
            <div>estrelhinas</div>
          }
        </div>
        <img src={BagNoneIcon} className='w=[40px] h-[40px]' />
      </div>
    </a>
  );
}

function FavoriteButton({ productId }) {
  const favorited = getWishlistItemById(productId);

  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleFavoriteButtonClick() {
    setIsFavorited(!isFavorited);

    getWishlistItemById(productId)
      ? removeWishlistItemById(productId)
      : addItemToWishlist(productId);
  }

  return (
    <button
      onClick={handleFavoriteButtonClick}
      className={`absolute right-1 top-1 cursor-pointer border rounded-full p-2 shadow
                 ${!isFavorited && 'hover:bg-branding-error transition-colors duration-300 ease-in-out'}`}
    >
      <img
        src={isFavorited ? FavoriteRedIcon : FavoriteDefaultIcon}
        className="w-[20px] h-[20px]"
      />
    </button>
  );
}

