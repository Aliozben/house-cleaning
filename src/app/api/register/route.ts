import bcrypt from "bcryptjs";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {username, password, email} = body;
  console.log(body);
  if (!username || !password) {
    return NextResponse.json(
      {
        message: "Username and password are required",
      },
      {status: 400}
    );
  }
  const isUserExist = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (isUserExist) {
    return NextResponse.json(
      {
        message: "User already exists",
      },
      {status: 400}
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
    },
  });

  return NextResponse.json(user);
}
