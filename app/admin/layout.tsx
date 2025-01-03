"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Mendapatkan path aktif

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "User", path: "/admin/user" },
    { name: "Pemesanan", path: "/admin/pemesanan" },
    { name: "Makanan", path: "/admin/makanan" },
    { name: "Minuman", path: "/admin/minuman" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        {/* Header Sidebar */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex-1">
          <ul className="space-y-2 px-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block px-4 py-2 rounded transition ${
                    pathname === item.path
                      ? "bg-gray-700 text-orange-500 font-bold"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol Logout */}
        <div className="p-4 bg-gray-900">
          <Link
            href="/login"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition inline-block w-full text-center"
          >
            Logout
          </Link>
        </div>

        {/* Footer */}
        <footer className="p-4 text-center text-sm bg-gray-900">
          &copy; 2024 CoffeeShop Admin
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
