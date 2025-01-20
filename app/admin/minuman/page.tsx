"use client";

import { useEffect, useState } from "react";

type Minuman = {
  id: string;
  name: string;
  price: number;
};

export default function MinumanPage() {
  const [minuman, setMinuman] = useState<Minuman[]>([]);

  async function fetchMinuman() {
    try {
      const res = await fetch("/api/minuman");
      if (!res.ok) {
        console.error("Gagal mengambil data minuman");
        return;
      }
      const data = await res.json();
      setMinuman(data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data minuman:", error);
    }
  }

  useEffect(() => {
    fetchMinuman();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">🍹 Daftar Minuman</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {minuman.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
