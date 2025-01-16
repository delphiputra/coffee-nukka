"use client";

import { useEffect, useState } from "react";

// Definisikan tipe untuk data pengguna
type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Pembeli";
};

export default function UserPage() {


  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-6 text-center">
        👥 Manajemen Pengguna
      </h1>

      {/* Form Tambah/Edit */}
      <div className="mb-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-600 mb-4 text-center">
          ➕ Tambah/Edit Pengguna
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Nama"
            className="border rounded-lg p-3 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select className="border rounded-lg p-3 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option value="Admin">Admin</option>
            <option value="Pembeli">Pembeli</option>
          </select>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition sm:col-span-2 lg:col-span-1">
            Tambah
          </button>
        </div>

        {/* Tabel Daftar Pengguna */}
        <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="border px-4 py-2 text-left">ID</th>
                <th className="border px-4 py-2 text-left">Nama</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Role</th>
                <th className="border px-4 py-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-800">1</td>
                <td className="border px-4 py-2 text-gray-800">Contoh Nama</td>
                <td className="border px-4 py-2 text-gray-800">
                  email@contoh.com
                </td>
                <td className="border px-4 py-2 text-gray-800">Admin</td>
                <td className="border px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition">
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center text-gray-500 mt-4">
            Tidak ada data pengguna.
          </div>
        </div>
      </div>
    </div>
  );
}
