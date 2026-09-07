import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function Shop() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("topBrands");

  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-24">
      <main className="mx-auto max-w-md px-5 pb-8">

        {/* Header */}
        <header className="flex items-center justify-between pb-4 pt-6">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Welcome back
            </p>

            <h1 className="mt-1 text-2xl font-bold text-[#17142a]">
              Shop
            </h1>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
            R
          </div>
        </header>

        {/* Hero Banner */}
        <section className="overflow-hidden rounded-3xl bg-[#6c35d9] p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-200">
            Shop with 1Fi
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight">
            Shop today,
            <br />
            Pay later using Mutual Funds.
          </h2>

          <p className="mt-3 text-sm leading-6 text-purple-100">
            No credit score required.
            <br />
            No interest. Backed by your investments.
          </p>

          <button
            onClick={() => navigate("/marketplace")}
            className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-purple-700 transition hover:bg-purple-50"
          >
            Explore Marketplace →
          </button>
        </section>

        {/* Search */}
        <div className="mt-6">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
            <span className="text-lg text-gray-400">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search online stores"
              className="w-full bg-transparent text-sm text-[#17142a] outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-7 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("topBrands")}
            className={`pb-3 text-sm font-semibold transition ${
              activeTab === "topBrands"
                ? "border-b-2 border-purple-700 text-purple-700"
                : "text-gray-400"
            }`}
          >
            Top Brands
          </button>

          <button
            onClick={() => setActiveTab("nearbyStores")}
            className={`pb-3 text-sm font-semibold transition ${
              activeTab === "nearbyStores"
                ? "border-b-2 border-purple-700 text-purple-700"
                : "text-gray-400"
            }`}
          >
            Nearby Stores
          </button>
        </div>

        {/* Top Brands */}
        {activeTab === "topBrands" && (
          <section className="mt-6">
            <div className="flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-purple-700" />

              <div>
                <h2 className="text-lg font-bold text-[#17142a]">
                  Top Brands
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Shop from your favourite brands
                </p>
              </div>
            </div>

            {/* Brand cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-xl">
                  ✈
                </div>

                <p className="mt-3 text-sm font-bold text-[#17142a]">
                  Air India
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-xl">
                  
                </div>

                <p className="mt-3 text-sm font-bold text-[#17142a]">
                  Apple Premium Reseller
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-xl">
                  ◇
                </div>

                <p className="mt-3 text-sm font-bold text-[#17142a]">
                  CaratLane
                </p>
              </div>

              <button
                onClick={() => navigate("/marketplace")}
                className="rounded-2xl border border-purple-100 bg-purple-50 p-5 text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700">
                  +
                </div>

                <p className="mt-3 text-sm font-bold text-purple-700">
                  1Fi Marketplace
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Explore products
                </p>
              </button>

            </div>
          </section>
        )}

        {/* Nearby Stores */}
        {activeTab === "nearbyStores" && (
          <section className="mt-8 rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-2xl">
              ⌖
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#17142a]">
              Nearby Stores
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Nearby store discovery can be added here.
            </p>
          </section>
        )}

      </main>

      <BottomNav />
    </div>
  );
}

export default Shop;