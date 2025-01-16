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