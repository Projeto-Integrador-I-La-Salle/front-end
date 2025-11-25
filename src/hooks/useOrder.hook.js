import { useCallback, useContext, useState } from "react";
import { LoaderContext } from "../contexts/LoaderContext";
import { getById } from "../api/orders.api";

export function useOrders() {
  const { setIsLoading } = useContext(LoaderContext);

  /**
   * @type {[OrderHistory, React.Dispatch<OrderHistory>]}
   */
  const [order, setOrder] = useState();

  const getOrder = useCallback(async function(id) {
    try {
      setIsLoading(true);

      const response = await getById(id);

      setOrder(response?.data?.data || {});
    } catch (err) {
      console.error("[ERROR]: An error has occured, ", err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  return { getOrder, order };
}

