import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generatePOCode } from "@/lib/code-generator";

export async function GET() {
  try {
    const orders = await prisma.equipmentPurchaseOrder.findMany({
      include: {
        entries: true,
      },
      orderBy: {
        date_order: "desc",
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.error("GET /api/equipment-purchase-orders error:", error);
    return NextResponse.json({ error: "Failed to fetch purchase orders" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      list, 
      detail, 
      quantity, 
      reason_order, 
      picture, 
      buyer, 
      reviewer, 
      approver, 
      status,
      date_order 
    } = body;

    const po_code = await generatePOCode();

    const order = await prisma.equipmentPurchaseOrder.create({
      data: {
        po_code,
        list,
        detail,
        quantity: quantity || 0,
        reason_order,
        picture,
        buyer,
        reviewer,
        approver,
        status,
        date_order: date_order ? new Date(date_order) : undefined,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("POST /api/equipment-purchase-orders error:", error);
    return NextResponse.json({ error: "Failed to create purchase order" }, { status: 500 });
  }
}
