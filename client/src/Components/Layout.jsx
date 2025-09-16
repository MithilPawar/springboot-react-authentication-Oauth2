import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">My App</div>
        <div className="space-x-4">
          <Link
            to="/dashboard"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Profile
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-4 mt-auto">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}
