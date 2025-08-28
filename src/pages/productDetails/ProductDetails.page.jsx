import { useLoaderData } from "react-router";
import TopBar from "../../components/TopBar";
import MainHeader from "../../components/MainHeader";
import { NavBar } from "../../components/NavBar";
import { Container } from "../../components/Container.component";
import imgCapacete from '../../assets/img-capacete.jpg';
import imgCapaceteAlt from '../../assets/img-capacete-alt.webp';
import imgUnavailableProduct from '../../assets/img-unavailable-product.webp';

import { useState } from "react";
import { TypographyHeading } from "../../components/typography/TypographyHeading.component";
import { StockStatus } from "../../components/StockStatus.component";
import { TypographyBody } from "../../components/typography/TypographyBody.component";
import { DiscountTag } from "../../components/DiscountTag.component";
import { SectionIntersection } from "../../components/Intersection.component";
import { Quantity } from "../../components/Quantity.component";

import iconShop from '../../assets/icons/icon-shop-vector.svg';
import iconFavorite from '../../assets/icons/icon-heart-success-dark-vector.svg';

export function ProductDetailsPage() {
    const { data } = useLoaderData();

    const images = {
        mainImage: imgCapacete,
        variations: [imgCapacete, imgCapacete, imgCapaceteAlt, imgCapaceteAlt]
    };

    const productMock = {
        hasDiscount: true,
        category: 'Acessórios',
        tags: ['proteção', 'segurança']
    }

    return (
        <div>
            <TopBar />
            <MainHeader />
            <NavBar />
            <Container>
                <div className="mt-10">
                    <section className="flex justify-between">
                        <ImageSection images={images} />
                        <ProductInfo product={productMock} />
                    </section>
                </div>
            </Container>
        </div>
    );
}


/**
 * Renders an image section component.
 *
 * @component
 * @param {object} images The images to be rendered.
 * @returns {ReactNode} A React element displaying the images.
 */
function ImageSection({ images }) {
    const [currentImg, setCurrentImg] = useState(images?.mainImage || imgUnavailableProduct);

    const hasMoreThanOneVariation = images?.variations?.length > 0;

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
                {hasMoreThanOneVariation
                    ? images.variations.map(function(image, idx) {
                        return (
                            <button
                                key={idx}
                                className="p-1 hover:border border-red-300"
                                onClick={function() {
                                    handleImageButtonClick(image);
                                }}>
                                <img
                                    src={image}
                                    height={100}
                                    width={100}
                                />
                            </button>
                        );
                    })
                    : <img
                        src={currentImg}
                    />
                }
            </div>
            <div className="w-[70%] flex items-center justify-center h-[100%]">
                <img src={currentImg} className="" height={150} width={150} />
            </div>
        </div >
    );
}


function ProductInfo({ product }) {
    const [currentQuantity, setCurrentQuantity] = useState(1);

    //const hasReview = process.env.FLG_REVIEW === 'true';
    const hasReview = false;
    const hasSKU = false;

    return (
        <div className="w-[50%] select-none">
            <div className="flex gap-2 items-center mb-5">
                <TypographyHeading variation={4} weight={600}>Capacete</TypographyHeading>
                <StockStatus hasStock={true} />
            </div>
            {hasReview && <div>Estrelhas de review</div>}
            {hasSKU && <div>SKU: 1,433,43</div>}
            <div className="flex gap-2 items-center"> {/* price */}
                {product?.hasDiscount &&
                    <TypographyBody className="line-through text-gray-300" >
                        <TypographyBody.XL>
                            R$48,00
                        </TypographyBody.XL>
                    </TypographyBody>
                }
                <TypographyBody>
                    <TypographyBody.XXL>
                        R$17,28
                    </TypographyBody.XXL>
                </TypographyBody>
                {product?.hasDiscount &&
                    <DiscountTag value={64} />
                }
            </div>
            <SectionIntersection />
            <div> {/* Product Description */}
                <TypographyBody className="text-gray-500">
                    <TypographyBody.Small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </TypographyBody.Small>
                </TypographyBody>
            </div>
            <SectionIntersection />
            <div className="flex items-center justify-between"> {/* Control's button */}
                <Quantity
                    availableStockQuantity={5}
                    currentQuantity={currentQuantity}
                    setCurrentQuantity={setCurrentQuantity}
                />
                <AddToCartButton handleSubmit={function() { }} />
                <AddToFavoriteButton handleSubmit={function() { }} />
            </div>
            <SectionIntersection />
            <div> {/* Category & Tags */}
                <div className="flex gap-1 mb-3">
                    <TypographyBody weight={500}>
                        <TypographyBody.Small>
                            Categoria:
                        </TypographyBody.Small>
                    </TypographyBody>
                    <TypographyBody className="text-gray-500">
                        <TypographyBody.Small>
                            {product?.category}
                        </TypographyBody.Small>
                    </TypographyBody>
                </div>
                <div className="flex gap-1">
                    {product?.tags?.length > 0 &&
                        <div className="flex gap-1">
                            <TypographyBody weight={500} className="text-black">
                                <TypographyBody.Small>
                                    Tag:
                                </TypographyBody.Small>
                            </TypographyBody>
                            <div className="flex gap-1">
                                {product?.tags.map(function(tag, idx) {
                                    return (
                                        <TypographyBody key={idx} className="text-gray-500">
                                            <TypographyBody.Small>
                                                {tag}
                                            </TypographyBody.Small>
                                        </TypographyBody>
                                    );
                                })}
                            </div>
                        </div>
                    }
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
                <TypographyBody.Medium>
                    Adicionar Ao Carrinho
                </TypographyBody.Medium>
            </TypographyBody>
            <img src={iconShop} />
        </button>
    );
}

function AddToFavoriteButton({ handleSubmit }) {
    return (
        <button
            onClick={handleSubmit}
            className="bg-[#20b526] bg-opacity-10 p-3 rounded-full hover:bg-opacity-30 transition duration-200 ease-in-out">
            <img src={iconFavorite} />
        </button>
    );
}

