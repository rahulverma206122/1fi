import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [confirmed, setConfirmed] = useState(false);

  if (!state) {
    return (
      <div className="min-h-screen bg-[#f8f7fc] px-5 pt-10">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-bold text-[#17142a]">
            No selection found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please select a product and EMI plan first.
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

  const { product, variant, plan } = state;

  if (confirmed) {
    return (
      <div className="min-h-screen bg-[#f8f7fc] pb-28">
        <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-md flex-col items-center justify-center px-5 text-center">

          {/* Success Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl font-bold text-purple-700">
            ✓
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-purple-700">
            1Fi Marketplace
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#17142a]">
            Purchase confirmed!
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
            Your selected product and EMI plan have been successfully
            confirmed.
          </p>

          {/* Success Card */}
          <div className="mt-8 w-full rounded-3xl bg-white p-5 text-left shadow-sm">
            <div className="flex gap-4">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3">
                <img
                  src={variant.image || product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                  {product.brand}
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#17142a]">
                  {product.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {variant.color} · {variant.storage}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  EMI tenure
                </span>

                <span className="font-semibold text-[#17142a]">
                  {plan.tenure} months
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-500">
                  Monthly payment
                </span>

                <span className="font-bold text-purple-700">
                  ₹{plan.monthlyAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/marketplace")}
            className="mt-6 w-full rounded-full bg-purple-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-purple-800"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-4 font-semibold text-[#17142a]"
          >
            Back to Shop
          </button>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-28">
      <main className="mx-auto max-w-md px-5 pb-8 pt-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm"
          >
            ←
          </button>

          <div>
            <p className="text-sm font-medium text-gray-500">
              1Fi Marketplace
            </p>

            <h1 className="text-xl font-bold text-[#17142a]">
              Confirm Purchase
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl text-purple-700">
            ✓
          </div>

          <h2 className="mt-4 text-2xl font-bold text-[#17142a]">
            You're almost there!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Review your product and EMI plan before continuing.
          </p>
        </div>

        {/* Product */}
        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex gap-4">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3">
              <img
                src={variant.image || product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                {product.brand}
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#17142a]">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {variant.color} · {variant.storage}
              </p>

              <p className="mt-2 font-bold text-[#17142a]">
                ₹{variant.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* EMI Summary */}
        <div className="mt-5 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-purple-700" />

            <h3 className="text-sm font-bold uppercase tracking-widest text-purple-700">
              EMI Summary
            </h3>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Tenure
              </span>

              <span className="font-semibold text-[#17142a]">
                {plan.tenure} months
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Interest
              </span>

              <span className="font-semibold text-[#17142a]">
                {plan.interestRate}%
              </span>
            </div>

            <div className="flex justify-between border-t border-gray-100 pt-4">
              <span className="font-semibold text-[#17142a]">
                Monthly payment
              </span>

              <span className="font-bold text-purple-700">
                ₹{plan.monthlyAmount.toLocaleString("en-IN")}
              </span>
            </div>

            {plan.cashback > 0 && (
              <div className="rounded-2xl bg-green-50 p-3 text-center text-sm font-semibold text-green-600">
                ₹{plan.cashback.toLocaleString("en-IN")} cashback included
              </div>
            )}
          </div>
        </div>

        {/* Confirm */}
        <button
          onClick={() => setConfirmed(true)}
          className="mt-6 w-full rounded-full bg-purple-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-purple-800"
        >
          Confirm Purchase
        </button>

        {/* Change Selection */}
        <button
          onClick={() => navigate(-1)}
          className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-4 text-base font-semibold text-[#17142a]"
        >
          Change Selection
        </button>
      </main>

      <BottomNav />
    </div>
  );
}

export default Confirmation;