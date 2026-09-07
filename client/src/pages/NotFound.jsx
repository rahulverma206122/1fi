import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-28">
      <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-md flex-col items-center justify-center px-5 text-center">
        
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-3xl font-bold text-purple-700">
          404
        </div>

        <h1 className="mt-6 text-3xl font-bold text-[#17142a]">
          Page not found
        </h1>

        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-7 rounded-full bg-purple-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-purple-800"
        >
          Back to Shop
        </button>

        <button
          onClick={() => navigate("/marketplace")}
          className="mt-3 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#17142a]"
        >
          Explore Marketplace
        </button>
      </main>

      <BottomNav />
    </div>
  );
}

export default NotFound;