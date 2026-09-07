import BottomNav from "../components/BottomNav";

function Limit() {
  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-24">
      <main className="mx-auto max-w-md px-5 pt-8">
        <h1 className="text-2xl font-bold text-[#17142a]">Your Limit</h1>

        <div className="mt-6 rounded-3xl bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-gray-500">Available 1Fi Limit</p>
          <h2 className="mt-3 text-3xl font-bold text-purple-700">
            ₹1,00,000
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Your shopping limit is ready to use.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Limit;