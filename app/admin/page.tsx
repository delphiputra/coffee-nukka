"use client";

import { useEffect, useState } from "react";

interface Makanan {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface Minuman {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function CoffeeMenu() {
  const [makanan, setMakanan] = useState<Makanan[]>([]);
  const [minuman, setMinuman] = useState<Minuman[]>([]);

  async function fetchMakanan() {
    const res = await fetch("/api/makanan");
    const data = await res.json();
    setMakanan(data);
  }

  async function fetchMinuman() {
    const res = await fetch("/api/minuman");
    const data = await res.json();
    setMinuman(data);
  }

  useEffect(() => {
    fetchMakanan();
    fetchMinuman();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Menu Makanan dan Minuman</h1>
      <h2 className="text-3xl mt-6">Makanan 🍽️</h2>
      <ul>
        {makanan.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
          </li>
        ))}
      </ul>
      <h2 className="text-3xl mt-6">Minuman 🍹</h2>
      <ul>
        {minuman.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
