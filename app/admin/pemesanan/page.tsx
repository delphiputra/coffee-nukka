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

  const handleOrderCompletion = (itemId: string) => {
    const updatedItems = orderDetails.items.filter((item) => item.id !== itemId);
    const updatedOrder = { ...orderDetails, items: updatedItems };
    setOrderDetails(updatedOrder);
    localStorage.setItem("order", JSON.stringify(updatedOrder));
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center">Detail Pemesanan</h1>
      <div className="bg-white shadow rounded-lg p-6 mt-6">
        {!orderDetails.items.length ? (
          <p className="text-center text-gray-500">Tidak ada pesanan.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Jumlah</th>
                <th className="border px-4 py-2">Harga</th>
                <th className="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.items.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">Rp {item.price}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleOrderCompletion(item.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Pesanan Selesai
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
