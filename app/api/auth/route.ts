import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface Request {
  json: () => Promise<{ email: string; password: string }>;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { email, password } = await req.json();

    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Email tidak ditemukan" }),
        { status: 401 }
      );
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Password salah" }),
        { status: 401 }
      );
    }

    // Hapus password sebelum mengirim respons
    const { password: _, ...userData } = user;

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error: any) {
    console.error("Error in login:", error.message);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan pada server" }),
      { status: 500 }
    );
  }
}