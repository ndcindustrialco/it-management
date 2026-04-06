import { PrismaClient } from '../generated/prisma/client';
const prisma = new PrismaClient();

async function checkPOs() {
  try {
    const pos = await prisma.equipmentPurchaseOrder.findMany({
      take: 10,
    });
    console.log(JSON.stringify(pos, null, 2));
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

checkPOs();
