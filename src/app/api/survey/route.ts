import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const surveys = await prisma.survey.findMany({
    select: {
      id: true,
      nameInfo: true,
      lastReadDate: true,
    },
  });

  return NextResponse.json(surveys);
}
