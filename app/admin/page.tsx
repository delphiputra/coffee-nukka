"use client";

import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
  const [cart, setCart] = useState<number>(0);

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

  function addToCart(item: Makanan | Minuman) {
    setCart(cart + 1);

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = currentCart.findIndex((cartItem: any) => cartItem.id === item.id);

    if (index === -1) {
      currentCart.push({ ...item, quantity: 1 });
    } else {
      currentCart[index].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
  }

  useEffect(() => {
    fetchMakanan();
    fetchMinuman();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Menu Makanan dan Minuman</h1>
        <Link href="/keranjang">
          <button>
            <ShoppingCartIcon className="w-6 h-6" />
            <span>{cart}</span>
          </button>
        </Link>
      </div>
      <h2 className="text-3xl mt-6">Makanan 🍽️</h2>
      <ul>
        {makanan.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
            <button onClick={() => addToCart(item)}>Tambah ke Keranjang</button>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl mt-6">Minuman 🍹</h2>
      <ul>
        {minuman.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
            <button onClick={() => addToCart(item)}>Tambah ke Keranjang</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
