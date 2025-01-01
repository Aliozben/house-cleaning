"use server";

import prisma from "@/lib/db";
import {z} from "zod";
import bcrypt from "bcrypt";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3),
});
export async function register(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const isUserExist = await prisma.user.findUnique({
    where: {
      username: validatedFields.data.username,
    },
  });

  if (isUserExist)
    return {
      message: "User already exists",
    };

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  console.log(hashedPassword);

  const user = await prisma.user.create({
    data: {
      email: validatedFields.data.email,
      password: hashedPassword,
      username: validatedFields.data.username,
    },
  });

  return user;
}
