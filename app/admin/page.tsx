export default function CoffeeMenu() {
  const coffeeMenu = [
    {
      name: "Espresso",
      description: "Strong and bold coffee shot.",
      price: "Rp 20000",
      image: "/images/espresso.jpg",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam.",
      price: "Rp 20000",
      image: "/images/cappuccino.jpg", // Path gambar untuk Cappuccino
    },
    {
      name: "Latte",
      description: "Creamy milk coffee.",
      price: "Rp 20000",
      image: "/images/latte.jpg",
    },
    {
      name: "Americano",
      description: "Espresso with hot water.",
      price: "Rp 20000",
      image: "/images/americano.jpg",
    },
    {
      name: "Mocha",
      description: "Coffee with chocolate and milk.",
      price: "Rp 20000",
      image: "/images/mocha.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-center mb-4 text-brown-800">
            Welcome to Our Coffee Shop ☕
          </h1>
          

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
                <button className="mt-6 w-full px-4 py-2 bg-brown-800 text-white rounded hover:bg-brown-800 transition">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
