import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Definisi tipe untuk request body
interface MakananRequestBody {
  name: string;
  price: string;
}

interface Request {
  json: () => Promise<MakananRequestBody>;
}

export async function GET(req: Request): Promise<Response> {
  try {
    const makanan = await prisma.makanan.findMany();
    return new Response(JSON.stringify(makanan), { status: 200 });
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, price } = body;

    const newMakanan = await prisma.makanan.create({
      data: { name, price: parseFloat(price) },
    });

    return new Response(JSON.stringify(newMakanan), { status: 201 });
  } catch (error) {
    return new Response("Error creating data", { status: 500 });
  }
}
