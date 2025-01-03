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


        {/* Footer */}
        <footer className="p-4 text-center text-sm bg-gray-900">
          
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
