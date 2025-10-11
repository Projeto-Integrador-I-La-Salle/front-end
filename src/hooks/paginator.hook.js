import { useState } from "react";

export function usePaginator() {
  /**
   * @type {[PageType, React.Dispatch<PageType>]}
   */
  const [page, setPage] = useState({
    pageSize: 20,
    pageNumber: 1,
    total: 0,
    links: new Array()
  });

  /**
   * @param {PageType} page
   */
  function setPagination(page) {
    // TODO: set searchParam
    setPage(page);
  }

  return { page, setPagination };
}

