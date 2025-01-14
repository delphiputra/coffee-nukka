"use client";

import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CoffeeMenu() {
  const [cart, setCart] = useState(0); // State untuk jumlah item di keranjang

  const coffeeMenu = [
    {
      name: "Espresso",
      description: "Strong and bold coffee shot.",
      price: "Rp 20.000",
      image: "/images/espresso.jpg",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam.",
      price: "Rp 25.000",
      image: "/images/cappuccino.jpg",
    },
    {
      name: "Latte",
      description: "Creamy milk coffee.",
      price: "Rp 30.000",
      image: "/images/latte.jpg",
    },
    {
      name: "Americano",
      description: "Espresso with hot water.",
      price: "Rp 18.000",
      image: "/images/americano.jpg",
    },
    {
      name: "Mocha",
      description: "Coffee with chocolate and milk.",
      price: "Rp 35.000",
      image: "/images/mocha.jpg",
    },
  ];

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-brown-800 text-center">Welcome to Our Coffee Shop ☕</h1>
            {/* Keranjang Belanja */}
            <div className="relative">
              <Link href="/pembeli/order">
                <button className="p-3 bg-brown-800 text-white rounded-full hover:bg-brown-850">
                  <ShoppingCartIcon className="w-6 h-6" />
                  {cart > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {cart}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
          
         

          {/* Coffee Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeMenu.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 transform hover:scale-105 hover:shadow-2xl transition-transform"
              >
                {/* Gambar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-brown-800">{item.name}</h2>
                  <span className="text-lg font-semibold text-green-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button
                  onClick={addToCart}
                  className="mt-6 w-full px-4 py-2 bg-brown-800 text-white rounded hover:bg-brown-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
