import BottomNav from "../components/BottomNav";

function Profile() {
  return (
    <div className="min-h-screen bg-[#f8f7fc] pb-24">
      <main className="mx-auto max-w-md px-5 pt-8">
        <h1 className="text-2xl font-bold text-[#17142a]">Profile</h1>

        <div className="mt-6 rounded-3xl bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
            R
          </div>
          <h2 className="mt-4 text-lg font-bold">My Profile</h2>
          <p className="mt-2 text-sm text-gray-500">
            Profile settings will be available here.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Profile;