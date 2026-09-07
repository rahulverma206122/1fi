import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    icon: "⌂",
    path: "/",
  },
  {
    label: "Shop",
    icon: "▣",
    path: "/shop",
  },
  {
    label: "EMI Dues",
    icon: "₹",
    path: "/emi-dues",
  },
  {
    label: "Limit",
    icon: "↗",
    path: "/limit",
  },
  {
    label: "Profile",
    icon: "●",
    path: "/profile",
  },
];

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2.5">
        {navItems.map((item) => {
          const isActive =
            item.label === "Shop"
              ? location.pathname.startsWith("/shop") ||
                location.pathname.startsWith("/marketplace") ||
                location.pathname.startsWith("/products") ||
                location.pathname.startsWith("/confirmation")
              : location.pathname === item.path;

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex min-w-[58px] flex-col items-center gap-1 rounded-xl px-2 py-1 transition ${
                isActive
                  ? "font-semibold text-purple-700"
                  : "text-gray-400"
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center text-xl ${
                  isActive ? "text-purple-700" : "text-gray-400"
                }`}
              >
                {item.icon}
              </span>

              <span className="text-[10px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;