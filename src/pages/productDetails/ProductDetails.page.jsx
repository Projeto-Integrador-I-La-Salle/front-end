import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";

import "../../types/global";

import TopBar from "../../components/TopBar";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { Container } from "../../components/Container.component";
import { ProductCard } from "../../components/ProductCard.component";
import { TypographyHeading } from "../../components/typography/TypographyHeading.component";
import { StockStatus } from "../../components/StockStatus.component";
import { TypographyBody } from "../../components/typography/TypographyBody.component";
import { DiscountTag } from "../../components/DiscountTag.component";
import { SectionIntersection } from "../../components/Intersection.component";
import { Quantity } from "../../components/Quantity.component";
import { Footer } from "../../components/Footer";

import iconShop from "../../assets/icons/icon-shop-vector.svg";
import iconFavorite from "../../assets/icons/icon-heart-success-dark-vector.svg";
import imgUnavailableProduct from "../../assets/img-unavailable-product.webp";
import { useGetAllProducts } from "../../hooks/getAllProducts.hook";

export function ProductDetailsPage() {
  /** @type {LoaderData} */
  const { product } = useLoaderData();

  const { products, getAll } = useGetAllProducts();

  useEffect(function() {
    getAll();
  }, []);

  const relatedProducts = products;

  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
      <Container>
        <div className="mt-10">
          <section className="flex justify-between">
            <ImageSection images={product?.imagens} />
            <ProductInfo product={product} />
          </section>
          <section className="flex flex-col items-center my-10">
            <TypographyHeading weight={600} variation={5}>
              Produtos Relacionados
            </TypographyHeading>
            <div className="flex justify-between my-10 gap-5">
              {relatedProducts?.length > 0 &&
                relatedProducts?.map(function(product, idx) {
                  if (idx < 4) {
                    return <ProductCard key={product.id} product={product} />;
                  }
                })}
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

/**
 * Renders an image section component.
 *
 * @component
 * @param {{ images: Array<ImageType> }} images The images to be rendered.
 * @returns {ReactNode} A React element displaying the images.
 */
function ImageSection({ images }) {
  const [currentImg, setCurrentImg] = useState(
    images?.[0].url || imgUnavailableProduct
  );

  const hasMoreThanOneVariation = images?.length > 0;

  /**
   * Set the current image on the state when click.
   *
   * @param {string} image The url of the image source.
   */
  function handleImageButtonClick(image) {
    setCurrentImg(image);
  }

  return (
    <div className="flex items-center w-[50%]">
      <div className="flex flex-col gap-3 w-[30%] items-center">
        {hasMoreThanOneVariation ? (
          images.map(function(image) {
            return (
              <button
                key={image.id}
                className="p-1 hover:border border-red-300"
                onClick={function() {
                  handleImageButtonClick(image.url);
                }}
              >
                <img src={image.url} height={100} width={100} />
              </button>
            );
          })
        ) : (
          <img src={currentImg} />
        )}
      </div>
      <div className="w-[70%] flex items-center justify-center h-[100%]">
        <img
          src={currentImg}
          className="w-full h-full object-cover p-5"
          alt="imagem"
        />
      </div>
    </div>
  );
}

/**
 * @param {{ product: ProductType }} props
 */
function ProductInfo({ product }) {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  //const hasReview = process.env.FLG_REVIEW === 'true';
  const hasReview = false;
  const hasSKU = false;

  return (
    <div className="w-[50%] select-none">
      <div className="flex gap-2 items-center mb-5">
        <TypographyHeading variation={4} weight={600}>
          {product.nome}
        </TypographyHeading>
        <StockStatus hasStock={true} />
      </div>
      {hasReview && <div>Estrelhas de review</div>}
      {hasSKU && <div>SKU: 1,433,43</div>}
      <div className="flex gap-2 items-center">
        {" "}
        {/* price */}
        {product?.hasDiscount && (
          <TypographyBody className="line-through text-gray-300">
            <TypographyBody.XL>R$48,00</TypographyBody.XL>
          </TypographyBody>
        )}
        <TypographyBody>
          <TypographyBody.XXL>
            R${product?.preco?.toString().replace(".", ",")}
          </TypographyBody.XXL>
        </TypographyBody>
        {product?.hasDiscount && <DiscountTag value={64} />}
      </div>
      <SectionIntersection />
      <div>
        {" "}
        {/* Product Description */}
        <TypographyBody className="text-gray-500">
          <TypographyBody.Small>{product.descricao}</TypographyBody.Small>
        </TypographyBody>
      </div>
      <SectionIntersection />
      <div className="flex items-center justify-between">
        {" "}
        {/* Control's button */}
        <Quantity
          availableStockQuantity={product.qtdEstoque}
          currentQuantity={currentQuantity}
          setCurrentQuantity={setCurrentQuantity}
        />
        <AddToCartButton handleSubmit={function() { }} />
        <AddToFavoriteButton handleSubmit={function() { }} />
      </div>
      <SectionIntersection />
      <div>
        {" "}
        {/* Category & Tags */}
        <div className="flex gap-1 mb-3">
          <TypographyBody weight={500}>
            <TypographyBody.Small>Categoria:</TypographyBody.Small>
          </TypographyBody>
          <TypographyBody className="text-gray-500">
            <TypographyBody.Small>
              {product?.categoria?.tipo}
            </TypographyBody.Small>
          </TypographyBody>
        </div>
        <div className="flex gap-1">
          {product?.tags?.length > 0 && (
            <div className="flex gap-1">
              <TypographyBody weight={500} className="text-black">
                <TypographyBody.Small>Tag:</TypographyBody.Small>
              </TypographyBody>
              <div className="flex gap-1">
                {product?.tags.map(function(tag, idx) {
                  return (
                    <TypographyBody key={idx} className="text-gray-500">
                      <TypographyBody.Small>{tag}</TypographyBody.Small>
                    </TypographyBody>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AddToCartButton({ handleSubmit }) {
  return (
    <button
      onClick={handleSubmit}
      className="bg-branding-success rounded-full py-3 px-10 flex items-center justify-center gap-3 w-8/12
            hover:bg-opacity-90 transition duration-150 ease-in-out
            "
    >
      <TypographyBody className="text-white" weight={600}>
        <TypographyBody.Medium>Adicionar Ao Carrinho</TypographyBody.Medium>
      </TypographyBody>
      <img src={iconShop} />
    </button>
  );
}

function AddToFavoriteButton({ handleSubmit }) {
  return (
    <button
      onClick={handleSubmit}
      className="bg-[#20b526] bg-opacity-10 p-3 rounded-full hover:bg-opacity-30 transition duration-200 ease-in-out"
    >
      <img src={iconFavorite} />
    </button>
  );
}
