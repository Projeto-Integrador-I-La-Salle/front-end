import { useContext, useState } from "react";
import { get } from "../api/products.api";
import { LoaderContext } from "../contexts/LoaderContext";

export function useGetAllProducts() {
  const [products, setProducts] = useState();
  const [aditionalInfo, setAditionalInfo] = useState();
  const { setIsLoading } = useContext(LoaderContext);

  async function getAll() {
    setIsLoading(true);

    const response = await get();

    try {
      setProducts(response.data?.data);
      setAditionalInfo(response.data);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { products, getAll, aditionalInfo };
}

