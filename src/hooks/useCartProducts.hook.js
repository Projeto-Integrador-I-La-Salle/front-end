import { useEffect, useState, useContext } from "react";
import { getCart } from "../services/storage/cart";
import { LoaderContext } from "../contexts/LoaderContext";

export function useCartProducts() {
  const { setIsLoading } = useContext(LoaderContext);

  /**
   * @type {[Array<ProductType>, React.Dispatch<React.SetStateAction<Array<ProductType>>>]}
   */
  const [products, setProducts] = useState([]);

  useEffect(function() {
    setIsLoading(true);

    const cart = getCart();
    const items = cart?.items ?? [];

    setProducts(items);
    setIsLoading(false);
  }, [setIsLoading]);

  return { products, setProducts };
}

