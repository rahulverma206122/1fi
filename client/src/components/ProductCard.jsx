function ProductCard({ product, onClick }) {
  const lowestPrice = Math.min(
    ...product.variants.map((variant) => variant.price)
  );

  const lowestMrp = Math.min(
    ...product.variants.map((variant) => variant.mrp)
  );

  const discount = Math.round(
    ((lowestMrp - lowestPrice) / lowestMrp) * 100
  );

  return (
    <button
      onClick={onClick}
      className="w-full overflow-hidden rounded-3xl border border-gray-100 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative flex h-56 items-center justify-center bg-[#f7f6fa] p-7">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />

        {discount > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
          {product.brand}
        </p>

        <h3 className="mt-2 text-lg font-bold leading-snug text-[#17142a]">
          {product.name}
        </h3>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-xl font-bold text-[#17142a]">
            ₹{lowestPrice.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{lowestMrp.toLocaleString("en-IN")}
          </span>
        </div>

        {/* EMI */}
        <div className="mt-4 rounded-2xl bg-purple-50 px-4 py-3">
          <p className="text-xs font-medium text-gray-500">
            Starting EMI
          </p>

          <p className="mt-1 text-sm font-bold text-purple-700">
            ₹
            {Math.min(
              ...product.emiPlans.map((plan) => plan.monthlyAmount)
            ).toLocaleString("en-IN")}
            <span className="font-normal text-gray-500">
              {" "}
              / month
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-purple-700">
            View details
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

export default ProductCard;