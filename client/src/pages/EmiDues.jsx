import BottomNav from "../components/BottomNav";

function EmiDues() {
  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-24">
      <main className="mx-auto max-w-md px-5 pt-8">
        <h1 className="text-2xl font-bold text-[#17142a]">EMI Dues</h1>

        <div className="mt-6 rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="text-4xl">✓</div>
          <h2 className="mt-4 text-lg font-bold">Nothing due yet</h2>
          <p className="mt-2 text-sm text-gray-500">
            Your upcoming EMI payments will appear here.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default EmiDues;