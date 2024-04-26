import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const surveys = await prisma.survey.findMany({
      select: {
        id: true,
        nameInfo: true,
        lastReadDate: true,
      },
    });
    console.log("[api/survey] GET surverys:", surveys);
    return NextResponse.json(surveys);
  } catch (error) {
    console.error("[api/survey] GET error:", error);
  }
}
