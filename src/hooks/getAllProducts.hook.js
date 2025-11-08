import { useCallback, useContext, useState } from "react";

import { get } from "../api/products.api";

import { LoaderContext } from "../contexts/LoaderContext";

import { usePaginator } from "./paginator.hook";

export function useGetAllProducts() {

  /**
   * @type {[Array<ProductType>, React.Dispatch<Array<ProductType>>]}
   */
  const [products, setProducts] = useState(new Array());
  const { setIsLoading } = useContext(LoaderContext);
  const { page, setPagination } = usePaginator();

  /**
   * @param {PageType} [page={}] page
   */
  const getAll = useCallback(async function(page = {}) {
    let response = [];

    try {
      setIsLoading(true);

      if (page) {
        response = await get({
          pageNumber: page.pageNumber,
          pageSize: page.pageSize
        });
      } else {
        response = await get();
      }

      setProducts(response.data?.data);
      setPagination({
        pageNumber: response.data?.meta?.current_page,
        pageSize: response.data?.meta?.per_page,
        links: response.data?.meta?.links,
        total: response.data?.meta?.total
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  }, [setIsLoading, setPagination]);

  return {
    products,
    getAll,
    pageNumber: page.pageNumber,
    pageSize: page.pageSize,
    page,
    setPagination
  };
}

