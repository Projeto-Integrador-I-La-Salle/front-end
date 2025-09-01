function ProductRowFinalOrder({ image, name, quantity, price }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <span className="font-medium text-gray-700">
            {name} <span className="font-bold">x{quantity}</span>
          </span>
        </div>

        <div>
          <span className="font-semibold text-gray-900">R${price}</span>
        </div>
      </div>
    </div>
  );
}
export { ProductRowFinalOrder };
