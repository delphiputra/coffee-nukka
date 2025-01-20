import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request): Promise<Response> {
  try {
    const minuman = await prisma.minuman.findMany();
    return new Response(JSON.stringify(minuman), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
