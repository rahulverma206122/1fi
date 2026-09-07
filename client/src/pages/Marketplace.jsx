import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import { getProducts } from "../services/api";

function Marketplace() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProducts();

      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" ||
        product.brand.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-24">
      <main className="mx-auto max-w-md px-5 pb-8 pt-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/shop")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm"
          >
            ←
          </button>

          <div>
            <p className="text-sm font-medium text-gray-500">
              Shop
            </p>

            <h1 className="text-2xl font-bold text-[#17142a]">
              1Fi Marketplace
            </h1>
          </div>
        </div>

        {/* Intro Banner */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-[#6c35d9] p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-200">
                1Fi Marketplace
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight">
                Shop today.
                <br />
                Pay later with 1Fi.
              </h2>

              <p className="mt-3 max-w-[260px] text-sm leading-6 text-purple-100">
                Buy your favourite products using your mutual funds.
                No credit score. No interest.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
              ₹
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
            <span>Explore products</span>
            <span>→</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-purple-700" />

            <div>
              <h2 className="text-lg font-bold text-[#17142a]">
                Featured Products
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Shop now and pay in easy EMIs
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold text-purple-700">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <span className="text-lg text-gray-400">
            ⌕
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products or brands"
            className="w-full bg-transparent text-sm text-[#17142a] outline-none placeholder:text-gray-400"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-sm font-semibold text-gray-400"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {["All", "Apple", "Samsung", "Google"].map((item) => {
            const isActive = category === item;

            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "border border-gray-200 bg-white text-gray-600"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-5 rounded-2xl bg-white p-10 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />

            <p className="mt-4 text-sm text-gray-500">
              Loading products...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-5 rounded-2xl bg-white p-8 text-center">
            <p className="font-semibold text-[#17142a]">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {error}
            </p>

            <button
              onClick={fetchProducts}
              className="mt-5 rounded-xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products */}
        {!loading && !error && filteredProducts.length > 0 && (
          <div className="mt-5 space-y-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onClick={() =>
                  navigate(`/products/${product.slug}`)
                }
              />
            ))}
          </div>
        )}

        {/* No Products Found */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="mt-5 rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-2xl">
              ⌕
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#17142a]">
              No products found
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Try searching with a different product or brand name.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white"
            >
              View all products
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

export default Marketplace;