import { useState } from "react";

import { useSearchParams } from "react-router";

export function usePaginator() {
  const [searchParams, setSearchParams] = useSearchParams();

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

