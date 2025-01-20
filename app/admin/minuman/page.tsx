"use client";

import { useEffect, useState } from "react";

type Minuman = {
  id: string;
  name: string;
  price: number;
};

export default function MinumanPage() {
  const [minuman, setMinuman] = useState<Minuman[]>([]);
  const [newName, setNewName] = useState<string>("");
  const [newPrice, setNewPrice] = useState<string>("");

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

  async function addMinuman() {
    if (newName && parseFloat(newPrice) > 0) {
      try {
        const res = await fetch("/api/minuman", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newName, price: parseFloat(newPrice) }),
        });
        if (res.ok) {
          fetchMinuman();
          setNewName("");
          setNewPrice("");
        } else {
          console.error("Gagal menambahkan minuman");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat menambahkan minuman:", error);
      }
    } else {
      console.error("Nama dan harga harus valid!");
    }
  }

  useEffect(() => {
    fetchMinuman();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">🍹 Manajemen Minuman</h1>
      <div>
        <input
          type="text"
          placeholder="Nama Minuman"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Harga"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button onClick={addMinuman}>Tambah</button>
      </div>
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
