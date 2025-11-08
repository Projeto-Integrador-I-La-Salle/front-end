import RightArrowVectorIcon from '../assets/icons/icon-right-arrow-alt-vector.svg'
import LeftArrowVectorIcon from '../assets/icons/icon-left-arrow-vector.svg'

/**
 * Renders a paginator.
 *
 * @component
 * @param {{ page: PageType, setPage: Function }} props
 * @returns {ReactNode} A React element displaying the paginator.
 */
export function Paginator({ page, setPage }) {

  /**
   * @param {LinkType} link
   */
  function handleChangePageClick(link) {
    setPage({ ...page, pageNumber: link.page });
  }

  const data = {
    /**
     * @param {LinkType} link
     */
    label: function(link) {
      if (link.label === "&laquo; Previous") {
        return (
          <img
            src={LeftArrowVectorIcon}
            width={15}
            height={15}
          />
        );
      }
      if (link.label === "Next &raquo;") {
        return (
          <img
            src={RightArrowVectorIcon}
            width={15}
            height={15}
          />
        );
      }
      return link.label;
    },
    /**
     * @param {LinkType} link
     * @param {number} idx
     */
    className: function(link) {
      if (
        link.label === "&laquo; Previous" ||
        link.label === "Next &raquo;"
      ) {
        return 'border p-2 rounded-[100%]';
      }

      return `p-2 w-8 h-8 text-xs text-center hover:border rounded-[100%]
                        ${link.active && 'bg-red-500 text-white'}`;
    }
  }

  return (
    <div className='flex items-center gap-2'>
      {
        page?.links?.map(function(link, idx) {
          return (
            <button
              key={idx}
              className={data.className(link)}
              onClick={function() {
                handleChangePageClick(link)
              }}
            >
              {data.label(link)}
            </button>
          );
        })
      }
    </div >
  );
}

