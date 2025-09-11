import { useContext, useState } from "react";
import { get } from "../api/products.api";
import { LoaderContext } from "../contexts/LoaderContext";

export function useGetAllProducts() {

  /**
   * @type {[Array<ProductType>, React.Dispatch<Array<ProductType>>]}
   */
  const [products, setProducts] = useState(new Array());
  const [aditionalInfo, setAditionalInfo] = useState();
  const { setIsLoading } = useContext(LoaderContext);

  async function getAll() {
    setIsLoading(true);

    try {
      const response = await get();
      setProducts(response.data?.data);
      setAditionalInfo(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { products, getAll, aditionalInfo };
}

