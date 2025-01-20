"use client";

import { useEffect, useState } from "react";

export default function PemesananPage() {
  const [orderItems, setOrderItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order") || "[]");
    setOrderItems(storedOrder);
    calculateTotal(storedOrder);
  }, []);

  // Fungsi untuk menghitung total harga
  const calculateTotal = (items: any[]) => {
    let totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  // Fungsi untuk menghapus item pemesanan
  const removeItem = (id: number) => {
    const updatedOrder = orderItems.filter(item => item.id !== id);
    setOrderItems(updatedOrder);
    localStorage.setItem("order", JSON.stringify(updatedOrder)); // Menyimpan data pemesanan yang telah diperbarui
    calculateTotal(updatedOrder);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Detail Pemesanan
          </h1>

          <div className="bg-white shadow rounded-lg p-6">
            {orderItems.length === 0 ? (
              <p className="text-center text-gray-500">Tidak ada pesanan.</p>
            ) : (
              <div>
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-blue-200">
                    <tr>
                      
                      <th className="px-4 py-2 border text-black">Nama</th>
                      <th className="px-4 py-2 border text-black">Harga</th>
                      <th className="px-4 py-2 border text-black">Jumlah</th>
                      <th className="px-4 py-2 border text-black">Total Harga</th>
                      <th className="px-4 py-2 border text-black">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-100">
                        
                        <td className="px-4 py-2 border text-black">{item.name}</td>
                        <td className="px-4 py-2 border text-black">Rp {item.price}</td>
                        <td className="px-4 py-2 border text-black">{item.quantity}</td>
                        <td className="px-4 py-2 border text-black">
                          Rp {item.price * item.quantity}
                        </td>
                        <td className="px-4 py-2 border text-center text-black">
                          {item.status === "Waiting" ? (
                            <button
                              onClick={() => removeItem(item.id)}
                              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                              Pesanan Selesai
                            </button>
                          ) : (
                            <span className="text-green-500">Pesanan Selesai</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
