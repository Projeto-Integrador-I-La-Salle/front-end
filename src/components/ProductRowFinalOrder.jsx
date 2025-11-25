/**
 * @param {{ product: ProductType }} props
 */
function ProductRowFinalOrder({ product }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src={product?.imagens?.[0]?.url}
            alt={product?.nome}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <span className="font-medium text-gray-700">
            {product?.nome} <span className="font-bold">x{product?.quantidade}</span>
          </span>
        </div>

        <div>
          <span className="font-semibold text-gray-900">R${product?.preco}</span>
        </div>
      </div>
    </div>
  );
}
export { ProductRowFinalOrder };
