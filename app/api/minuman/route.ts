import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface MinumanRequestBody {
  name: string;
  price: string;
}

interface Request {
  json: () => Promise<MinumanRequestBody>;
}

export async function GET(req: Request): Promise<Response> {
  try {
    const minuman = await prisma.minuman.findMany();
    return new Response(JSON.stringify(minuman), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, price } = body;

    const newMinuman = await prisma.minuman.create({
      data: { name, price: parseFloat(price) },
    });

    return new Response(JSON.stringify(newMinuman), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
