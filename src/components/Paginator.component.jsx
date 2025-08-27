import RightArrowVectorIcon from '../assets/icons/icon-right-arrow-alt-vector.svg'
import LeftArrowVectorIcon from '../assets/icons/icon-left-arrow-vector.svg'

/**
 * Renders a paginator.
 *
 * @component
 * @param {number} totalPages The total amount of pages.
 * @param {number} currentPage The current page.
 * @returns {ReactNode} A React element displaying the paginator.
 */
export function Paginator({ totalPages = 5, currentPage = 1 }) {
  return (
    <div className='flex items-center gap-2'>
      <button className="border p-2 rounded-[100%]">
        <img src={LeftArrowVectorIcon} width={15} height={15} />
      </button>
      {new Array(totalPages).fill(0).map(function(_, idx) {
        return (
          <button
            key={idx}
            className={`p-2 w-8 h-8 text-xs text-center hover:border rounded-[100%]
                        ${currentPage === idx + 1 && 'bg-red-500 text-white'}`}
          >
            {idx + 1}
          </button>
        );
      })}
      <button className='border p-2 rounded-[100%]'>
        <img src={RightArrowVectorIcon} width={15} height={15} />
      </button>
    </div>
  );
}

