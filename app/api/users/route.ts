import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || (session.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");
  const search = searchParams.get("search") || "";
  const role = searchParams.get("role") || "ALL";
  const sortField = searchParams.get("sortField") || "username";
  const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "asc";

  const skip = (page - 1) * limit;

  try {
    const where: any = {};
    if (search) {
      where.OR = [
        { username: { contains: search, mode: "insensitive" } },
        { employee: { employee_name_th: { contains: search, mode: "insensitive" } } },
        { employee: { employee_name_en: { contains: search, mode: "insensitive" } } },
        { employee: { employee_code: { contains: search, mode: "insensitive" } } },
      ];
    }
    if (role !== "ALL") where.role = role;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
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
      prisma.user.count({ where }),
    ]);

    return NextResponse.json({
      data: users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session || (session.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { username, password, role, employeeId, employee } = body;

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: role || "user",
        // Case 1: Connect existing employee
        ...(employeeId ? { 
          employee: { connect: { id: employeeId } } 
        } : 
        // Case 2: Create new employee along with user
        employee ? {
          employee: {
            create: {
              employee_code: employee.employee_code,
              employee_name_th: employee.employee_name_th,
              employee_name_en: employee.employee_name_en,
              gender: employee.gender,
              position: employee.position,
              department: employee.department,
              work_location: employee.work_location,
              supervisor_name: employee.supervisor_name,
              start_date: employee.start_date ? new Date(employee.start_date) : null,
              end_date: employee.end_date ? new Date(employee.end_date) : null,
              status: employee.status || "ACTIVE",
            },
          },
        } : {}),
      },
      include: {
        employee: true,
      },
    } as any); // Using 'as any' to bypass complex nested type checks if needed, but the structure is correct for Prisma

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/users error:", error);
    
    // Check for unique constraint violation (P2002)
    if (error.code === 'P2002') {
      const target = error.meta?.target || [];
      return NextResponse.json({ 
        error: `Duplicate value error: ${target.join(', ')} already exists.` 
      }, { status: 409 });
    }

    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
