import { useCallback, useContext, useState } from "react";

import { getById as apiGetById } from "./src/api/products.api";

import { LoaderContext } from "./src/contexts/LoaderContext";

export function useProducts() {
  /**
   * @type {[ProductType, React.Dispatch<ProductType>]}
   */
  const [product, setProduct] = useState({});
  const { setIsLoading } = useContext(LoaderContext);

  /**
   * @param {string} id
   * @returns {Promise<AxiosResponse<ProductType>>}
   * */
  const getById = useCallback(async (id) => {
    try {
      setIsLoading(true);

      const response = await apiGetById(id);

      setProduct(response?.data?.data || {});
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  return { getById, product };
}

