"use client";

import { useEffect, useState } from "react";

export default function PemesananPage() {
  const [orderDetails, setOrderDetails] = useState<{ items: any[] }>({ items: [] });

  useEffect(() => {
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
      try {
        const parsedOrder = JSON.parse(storedOrder);
        setOrderDetails(parsedOrder);
      } catch (error) {
        console.error("Gagal memuat data pesanan dari localStorage:", error);
      }
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center">Detail Pemesanan</h1>
      <div className="bg-white shadow rounded-lg p-6 mt-6">
        {!orderDetails.items.length ? (
          <p className="text-center text-gray-500">Tidak ada pesanan.</p>
        ) : (
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x Rp {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
