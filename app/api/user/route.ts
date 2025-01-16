import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Definisikan tipe untuk request body
interface UserRequestBody {
  id?: number; // Optional, hanya diperlukan untuk update
  name: string;
  email: string;
  role: string;
  password: string;
}

// Endpoint GET untuk mengambil semua data pengguna
export async function GET(req: Request): Promise<Response> {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
}




