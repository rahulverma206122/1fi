import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BottomNav from "../components/BottomNav";
import { getProductBySlug } from "../services/api";

function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getProductBySlug(slug);

        const productData = response.data;

        setProduct(productData);

        if (productData.variants?.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }

        if (productData.emiPlans?.length > 0) {
          setSelectedPlan(productData.emiPlans[0]);
        }
      } catch (err) {
        console.error(err);
        setError("Unable to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f7fc]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#f8f7fc] px-5 pt-10">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-7 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-2xl">
            !
          </div>

          <h2 className="mt-4 text-xl font-bold text-[#17142a]">
            Product not available
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {error || "This product could not be found."}
          </p>

          <button
            onClick={() => navigate("/marketplace")}
            className="mt-6 rounded-full bg-purple-700 px-6 py-3 font-semibold text-white"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const currentPrice = selectedVariant?.price || 0;
  const currentMrp = selectedVariant?.mrp || 0;

  const savings = Math.max(currentMrp - currentPrice, 0);

  const discountPercentage =
    currentMrp > 0
      ? Math.round((savings / currentMrp) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-28">
      <main className="mx-auto max-w-md px-5 pb-8 pt-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/marketplace")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm"
            aria-label="Back"
          >
            ←
          </button>

          <div>
            <p className="text-sm font-medium text-gray-500">
              1Fi Marketplace
            </p>

            <h1 className="text-xl font-bold text-[#17142a]">
              Product Details
            </h1>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative mt-6 flex h-80 items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          {discountPercentage > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
              {discountPercentage}% OFF
            </span>
          )}

          <img
            src={selectedVariant?.image || product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <section className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600">
            {product.brand}
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#17142a]">
            {product.name}
          </h2>

          {/* Price */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-[#17142a]">
              ₹{currentPrice.toLocaleString("en-IN")}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{currentMrp.toLocaleString("en-IN")}
            </span>

            {savings > 0 && (
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                Save ₹{savings.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            {product.description}
          </p>
        </section>

        {/* Variant Selection */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-purple-700" />

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-700">
                  Select Variant
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Choose colour and storage
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {product.variants.map((variant) => {
              const isSelected =
                selectedVariant?._id === variant._id;

              return (
                <button
                  key={variant._id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-purple-700 bg-purple-50 shadow-sm"
                      : "border-gray-100 bg-white hover:border-purple-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Radio */}
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-purple-700"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="h-2.5 w-2.5 rounded-full bg-purple-700" />
                      )}
                    </div>

                    {/* Variant Info */}
                    <div className="flex-1">
                      <p className="font-semibold text-[#17142a]">
                        {variant.color}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {variant.storage}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-bold text-[#17142a]">
                        ₹{variant.price.toLocaleString("en-IN")}
                      </p>

                      {isSelected && (
                        <p className="mt-1 text-xs font-semibold text-purple-700">
                          Selected
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* EMI Plans */}
        <section className="mt-8">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-purple-700" />

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-purple-700">
                Choose EMI Plan
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Select a plan that works for you
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {product.emiPlans.map((plan) => {
              const isSelected =
                selectedPlan?._id === plan._id;

              return (
                <button
                  key={plan._id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-purple-700 bg-purple-50 shadow-sm"
                      : "border-gray-100 bg-white hover:border-purple-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Radio */}
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-purple-700"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="h-2.5 w-2.5 rounded-full bg-purple-700" />
                      )}
                    </div>

                    {/* Tenure */}
                    <div className="flex-1">
                      <p className="font-bold text-[#17142a]">
                        {plan.tenure} Months
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {plan.interestRate}% interest
                      </p>
                    </div>

                    {/* Monthly Amount */}
                    <div className="text-right">
                      <p className="font-bold text-[#17142a]">
                        ₹
                        {plan.monthlyAmount.toLocaleString("en-IN")}
                      </p>

                      <p className="text-xs text-gray-500">
                        / month
                      </p>
                    </div>
                  </div>

                  {plan.cashback > 0 && (
                    <div className="mt-3 ml-9 rounded-xl bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
                      ₹
                      {plan.cashback.toLocaleString("en-IN")} cashback
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Selection Summary */}
        {selectedVariant && selectedPlan && (
          <section className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-600">
                Your Selection
              </p>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                0% Interest
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Product
                </span>

                <span className="text-right text-sm font-semibold text-[#17142a]">
                  {selectedVariant.color} ·{" "}
                  {selectedVariant.storage}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  EMI tenure
                </span>

                <span className="font-semibold text-[#17142a]">
                  {selectedPlan.tenure} months
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-semibold text-[#17142a]">
                  Monthly payment
                </span>

                <span className="text-lg font-bold text-purple-700">
                  ₹
                  {selectedPlan.monthlyAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <button
          onClick={() =>
            navigate("/confirmation", {
              state: {
                product,
                variant: selectedVariant,
                plan: selectedPlan,
              },
            })
          }
          disabled={!selectedVariant || !selectedPlan}
          className="mt-6 w-full rounded-full bg-purple-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Proceed with selected plan
        </button>

        <p className="mt-3 text-center text-xs leading-5 text-gray-400">
          Review your selection before proceeding.
        </p>
      </main>

      <BottomNav />
    </div>
  );
}

export default ProductDetails;