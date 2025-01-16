"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]); // Menyimpan data keranjang
  const [total, setTotal] = useState(0); // Menyimpan total harga

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Fungsi untuk menghitung total harga
  const calculateTotal = (items: any[]) => {
    let totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Keranjang Belanja Anda 🛒
          </h1>

          <div className="bg-white shadow rounded-lg p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-700 font-bold">
                Keranjang Anda kosong
              </p>
            ) : (
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center mb-4"
                    >
                      <div>
                        <h3 className="text-lg font-extrabold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 font-bold">
                          Rp {item.price} x {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-right">
                  <p className="text-2xl font-extrabold text-gray-900">
                    Total: Rp {total}
                  </p>
                  <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded mt-4">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
