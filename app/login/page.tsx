"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);

    // Validasi input
    if (!email || !password) {
      setError("Email dan password harus diisi.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const user = await res.json();

        // Cek apakah data role tersedia
        if (user.role) {
          localStorage.setItem("user", JSON.stringify(user));

          // Arahkan pengguna berdasarkan role
          if (user.role === "Admin") {
            router.push("/admin");
          } else if (user.role === "Pembeli") {
            router.push("/pembeli");
          } else {
            setError("Role tidak dikenali.");
          }
        } else {
          setError("Data role tidak ditemukan.");
        }
      } else {
        const { error } = await res.json();
        setError(error || "Login gagal.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Terjadi kesalahan saat login.");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gradient-to-br from-white/70 via-white/80 to-white/90 p-10 rounded-lg shadow-2xl w-96">
        <h1 className="text-4xl font-bold mb-6 text-center text-brown-800">
          Welcome Back ☕
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}

        <div className="mb-6">
          <label
            className="block text-lg font-bold text-brown-700 mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="w-full border border-brown-300 rounded-lg px-4 py-2 text-brown-800 shadow-sm focus:ring-2 focus:ring-brown-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-bold text-brown-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="w-full border border-brown-300 rounded-lg px-4 py-2 text-brown-800 shadow-sm focus:ring-2 focus:ring-brown-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full bg-[#5C4033] text-white font-bold py-3 rounded-lg hover:bg-[#4A3228] transition-all duration-300 shadow-md"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-black mt-6 text-center text-brown-600 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-brown-700 font-medium hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
