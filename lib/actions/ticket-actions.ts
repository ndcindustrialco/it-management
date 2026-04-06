"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function getPendingTicketsCount() {
  const session = await auth();
  if (!(session?.user as any)?.id || (session?.user as any)?.role !== "admin") {
    return 0;
  }

  try {
    const count = await prisma.request.count({
      where: {
        status: {
          in: ["OPEN", "IN_PROGRESS"], // Using Status enum values from schema
        },
      },
    });
    return count;
  } catch (error) {
    console.error("Error fetching pending count:", error);
    return 0;
  }
}
