"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { assetSchema, AssetInput } from "@/lib/validations/asset";
import { generateAssetCode } from "@/lib/asset-utils";
import { logAudit } from "@/lib/audit";

export async function getAssets(params: {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
  status?: string;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
} = {}) {
  try {
    const { 
      page = 1, 
      limit = 50, 
      search = "", 
      type = "ALL", 
      status = "ALL",
      sortField = "asset_code",
      sortOrder = "desc" 
    } = params;

    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { asset_code: { contains: search, mode: 'insensitive' } },
        { serial_number: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
        { model: { contains: search, mode: 'insensitive' } },
        { employee: { employee_name_th: { contains: search, mode: 'insensitive' } } },
        { employee: { employee_name_en: { contains: search, mode: 'insensitive' } } },
        { employee: { employee_code: { contains: search, mode: 'insensitive' } } },
      ];
    }
    if (type !== "ALL") where.type = type;
    if (status !== "ALL") where.status = status;

    const [assets, total] = await Promise.all([
      prisma.asset.findMany({
        where,
        include: {
          employee: true,
        },
        orderBy: {
          [sortField]: sortOrder,
        },
        skip,
        take: limit,
      }),
      prisma.asset.count({ where }),
    ]);

    return { 
      success: true, 
      data: JSON.parse(JSON.stringify(assets)),
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  } catch (error) {
    console.error("Failed to fetch assets:", error);
    return { success: false, error: "Failed to fetch assets" };
  }
}

export async function getAssetById(id: string) {
  try {
    const asset = await prisma.asset.findUnique({
      where: { id },
      include: {
        employee: true,
        history: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return { success: true, data: JSON.parse(JSON.stringify(asset)) };
  } catch (error) {
    console.error("Failed to fetch asset:", error);
    return { success: false, error: "Failed to fetch asset" };
  }
}

export async function upsertAsset(input: AssetInput, userId?: string) {
  try {
    const validated = assetSchema.parse(input);
    const { id, asset_code, ...data } = validated;

    let finalAssetCode = asset_code;
    
    if (!id && !asset_code) {
      finalAssetCode = await generateAssetCode(data.type);
    }

    const assetData = {
      ...data,
      asset_code: finalAssetCode!,
      purchase_date: data.purchase_date ? new Date(data.purchase_date) : null,
      warranty_expire: data.warranty_expire ? new Date(data.warranty_expire) : null,
    };

    let asset;
    if (id) {
      // Get current asset to check if employee changed
      const currentAsset = await prisma.asset.findUnique({
        where: { id },
        select: { employeeId: true, location: true },
      });

      asset = await prisma.asset.update({
        where: { id },
        data: assetData,
      });

      // Log history if employee or location changed
      if (currentAsset?.employeeId !== data.employeeId || currentAsset?.location !== data.location) {
        let action = "UPDATE";
        let remarks = "";

        if (currentAsset?.employeeId !== data.employeeId) {
          action = data.employeeId ? "ASSIGN" : "RETURN";
          remarks = data.employeeId ? `Assigned to employee ${data.employeeId}` : "Unassigned";
        } else if (currentAsset?.location !== data.location) {
          action = "TRANSFER";
          remarks = `Moved from ${currentAsset?.location || "N/A"} to ${data.location || "N/A"}`;
        }

        await createAssetHistory(asset.id, {
          employeeId: data.employeeId,
          location: data.location,
          action,
          remarks,
        });
      }

      await logAudit({
        userId,
        action: "UPDATE",
        module: "ASSETS",
        details: { assetId: asset.id, assetCode: asset.asset_code },
      });
    } else {
      asset = await prisma.asset.create({
        data: assetData,
      });

      // Initial history
      await createAssetHistory(asset.id, {
        employeeId: data.employeeId,
        location: data.location,
        action: "CREATED",
        remarks: "Asset registered in system",
      });

      await logAudit({
        userId,
        action: "CREATE",
        module: "ASSETS",
        details: { assetId: asset.id, assetCode: asset.asset_code },
      });
    }

    revalidatePath("/admin/assets");
    return { success: true, data: JSON.parse(JSON.stringify(asset)) };
  } catch (error: any) {
    console.error("Failed to upsert asset:", error);
    return { success: false, error: error.message || "Failed to save asset" };
  }
}

export async function deleteAsset(id: string, userId?: string) {
  try {
    const asset = await prisma.asset.delete({
      where: { id },
    });

    await logAudit({
      userId,
      action: "DELETE",
      module: "ASSETS",
      details: { assetId: id, assetCode: asset.asset_code },
    });

    revalidatePath("/admin/assets");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete asset:", error);
    return { success: false, error: "Failed to delete asset" };
  }
}

async function createAssetHistory(assetId: string, data: {
  employeeId?: string | null;
  location?: string | null;
  action: string;
  remarks?: string | null;
}) {
  let employeeName = null;
  if (data.employeeId) {
    const emp = await prisma.employee.findUnique({
      where: { id: data.employeeId },
      select: { employee_name_th: true, employee_name_en: true },
    });
    employeeName = emp?.employee_name_en || emp?.employee_name_th || null;
  }

  await prisma.assetHistory.create({
    data: {
      assetId,
      employeeId: data.employeeId,
      employeeName,
      location: data.location,
      action: data.action,
      remarks: data.remarks,
      startDate: new Date(),
    },
  });
}
