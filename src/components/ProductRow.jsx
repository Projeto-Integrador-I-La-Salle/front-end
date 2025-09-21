import { CircleXIcon } from "lucide-react";

/**
 * @param {{ product: ProductType, onRemove: Function }} props
 */
function ProductRow({ product, onRemove }) {
  // TODO: handle this later.
  const inStock = "Em estoque";

  return (
    <div className="grid grid-cols-4 items-center py-4 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <img
          src={product?.imagens?.[0]?.url}
          alt={product?.nome}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <span className="font-medium text-gray-700">{product?.nome}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-900">
          {product?.preco.toString().replace(".", ",")}
        </span>
      </div>
      <div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
          }`}
        >
          Em estoque
        </span>

        <StockStatus hasStock={inStock} />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            onRemove(product.id);
          }}
          className="flex text-gray-400 hover:text-red-500 text-xl"
        >
          <CircleXIcon />
        </button>
      </div>
    </div>
  );
}
export { ProductRow };
