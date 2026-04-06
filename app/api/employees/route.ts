import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "ALL";
  const department = searchParams.get("department") || "ALL";
  const sortField = searchParams.get("sortField") || "employee_code";
  const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "asc";

  const skip = (page - 1) * limit;

  try {
    const where: any = {};
    if (search) {
      where.OR = [
        { employee_code: { contains: search, mode: "insensitive" } },
        { employee_name_th: { contains: search, mode: "insensitive" } },
        { employee_name_en: { contains: search, mode: "insensitive" } },
        { department: { contains: search, mode: "insensitive" } },
        { position: { contains: search, mode: "insensitive" } },
      ];
    }
    if (status !== "ALL") where.status = status;
    if (department !== "ALL") where.department = department;

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        include: {
          user: true,
        },
        orderBy: {
          [sortField]: sortOrder,
        },
        skip,
        take: limit,
      }),
      prisma.employee.count({ where }),
    ]);

    return NextResponse.json({
      data: employees,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET /api/employees error:", error);
    return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { 
      employee_code, 
      employee_name_th, 
      employee_name_en, 
      gender, 
      position, 
      department, 
      work_location, 
      supervisor_name, 
      start_date, 
      end_date, 
      status 
    } = body;

    if (!employee_code || !employee_name_th) {
      return NextResponse.json({ error: "Employee code and Thai name are required" }, { status: 400 });
    }

    const employee = await prisma.employee.create({
      data: {
        employee_code,
        employee_name_th,
        employee_name_en,
        gender,
        position,
        department,
        work_location,
        supervisor_name,
        start_date: start_date ? new Date(start_date) : null,
        end_date: end_date ? new Date(end_date) : null,
        status,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(employee, { status: 201 });
  } catch (error) {
    console.error("POST /api/employees error:", error);
    return NextResponse.json({ error: "Failed to create employee" }, { status: 500 });
  }
}
