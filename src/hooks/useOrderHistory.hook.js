import { useCallback, useContext, useEffect, useState } from "react";
import { LoaderContext } from "../contexts/LoaderContext";
import { get } from "../api/orders.api";

export function useOrderHistory() {
  const { setIsLoading } = useContext(LoaderContext);

  /**
   * @type {[Array<OrderHistory>, React.Dispatch<Array<OrderHistory>>]}
   */
  const [orders, setOrders] = useState([]);

  const getOrderHistory = useCallback(async function() {
    try {
      const response = await get();

      setOrders(response?.data?.data);
    } catch (err) {
      console.error("[ERROR]: An error has occured, ", err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(function() {
    getOrderHistory();
  }, [setIsLoading, getOrderHistory]);

  return { orders, setOrders };
}

