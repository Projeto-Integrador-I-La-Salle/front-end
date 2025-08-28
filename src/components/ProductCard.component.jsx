import imgLuva from '../assets/img-luva.webp';
import { TypographyBody } from './typography/TypographyBody.component';
import BagNoneIcon from '../assets/icons/icon-bag-none.svg'
import FavoriteDefaultIcon from '../assets/icons/icon-favorite-default.svg'
import { useState } from 'react';

export function ProductCard({ size = 4 }) {
  const [isHovering, setIsHovering] = useState(false);
  const hasDiscount = false;
  const hasStars = false;

  return (
    <a
      href={`/produtos/1`}
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
        <button className='absolute right-1 top-1 cursor-pointer'>
          <img
            src={FavoriteDefaultIcon}
            className="w-[40px] h-[40px]"
          />
        </button>
      }
      <img src={imgLuva} className='w-[70%]' />
      <div className='w-[100%] flex justify-between items-center'>
        <div>
          <TypographyBody weight={400}>
            <TypographyBody.Small>Luva Preta</TypographyBody.Small>
          </TypographyBody>
          <TypographyBody weight={500}>
            <TypographyBody.Medium>R$55,90</TypographyBody.Medium>
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

