"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function bulkDeleteInventory(ids: string[]) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentList.deleteMany({
      where: { id: { in: ids } }
    });
    revalidatePath("/admin/inventory");
    return { success: true };
  } catch (error) {
    console.error("Bulk Delete Inventory Error:", error);
    return { success: false, error: "Failed to delete selected items" };
  }
}

export async function bulkUpdateInventoryStatus(ids: string[], status: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentList.updateMany({
      where: { id: { in: ids } },
      data: { status }
    });
    revalidatePath("/admin/inventory");
    return { success: true };
  } catch (error) {
    console.error("Bulk Update Inventory Error:", error);
    return { success: false, error: "Failed to update selected items" };
  }
}

export async function bulkDeletePurchaseOrders(ids: string[]) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentPurchaseOrder.deleteMany({
      where: { id: { in: ids } }
    });
    revalidatePath("/admin/purchase-orders");
    return { success: true };
  } catch (error) {
    console.error("Bulk Delete PO Error:", error);
    return { success: false, error: "Failed to delete selected POs" };
  }
}

export async function bulkUpdatePurchaseOrderStatus(ids: string[], status: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentPurchaseOrder.updateMany({
      where: { id: { in: ids } },
      data: { status }
    });
    revalidatePath("/admin/purchase-orders");
    return { success: true };
  } catch (error) {
    console.error("Bulk Update PO Error:", error);
    return { success: false, error: "Failed to update selected POs" };
  }
}

export async function bulkDeleteEntryLists(ids: string[]) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentEntryList.deleteMany({
      where: { id: { in: ids } }
    });
    revalidatePath("/admin/equipment-entry-lists");
    return { success: true };
  } catch (error) {
    console.error("Bulk Delete Entry Error:", error);
    return { success: false, error: "Failed to delete selected entries" };
  }
}

export async function bulkUpdateEntryType(ids: string[], item_type: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  try {
    await prisma.equipmentEntryList.updateMany({
      where: { id: { in: ids } },
      data: { item_type }
    });
    revalidatePath("/admin/equipment-entry-lists");
    return { success: true };
  } catch (error) {
    console.error("Bulk Update Entry Error:", error);
    return { success: false, error: "Failed to update selected entries" };
  }
}
