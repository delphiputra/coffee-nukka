"use client";

// Tahap 1: Dasar tampilan daftar minuman

type Minuman = {
  id: string;
  name: string;
  price: number;
};

export default function MinumanPage() {
  const minuman: Minuman[] = [
    { id: "1", name: "Es Teh", price: 5000 },
    { id: "2", name: "Kopi Hitam", price: 10000 },
    { id: "3", name: "Jus Jeruk", price: 15000 },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-6 text-center">
        🍹 Daftar Minuman
      </h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-blue-700">
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Nama</th>
              <th className="border px-4 py-2 text-left">Harga</th>
            </tr>
          </thead>
          <tbody>
            {minuman.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-800">{item.id}</td>
                <td className="border px-4 py-2 text-gray-800">{item.name}</td>
                <td className="border px-4 py-2 text-gray-800">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {minuman.length === 0 && (
          <div className="text-center text-gray-500 mt-4">Tidak ada data minuman.</div>
        )}
      </div>
    </div>
  );
}
