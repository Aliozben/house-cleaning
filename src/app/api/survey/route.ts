import {z} from "zod";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

const surveySchema = z.object({
  type: z.string(),
  environment: z.string(),
  desiredFrequency: z.string(),
  rooms: z.object({
    bathroom: z.number().optional(),
    bedroom: z.number().optional(),
    halfBathroom: z.number().optional(),
    otherRoom: z.number().optional(),
    estimatedFootage: z.number(),
  }),
  basement: z.boolean(),
  pet: z.boolean(),
  renovation: z.boolean(),
  date: z.string(),
  additionalDetails: z.string().optional(),
  contact: z.string(),
  nameInfo: z.object({
    name: z.string(),
    lastname: z.string(),
  }),
  phone: z.number().optional(),
  email: z.string().optional(),
  address: z.string(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const survey = surveySchema.safeParse(body);
  if (!survey.success) {
    console.error(survey.error.issues);
    return NextResponse.json(survey.error.issues, {status: 400});
  }
  const surveyIsSaved = await prisma.survey.create({data: body});
  return NextResponse.json(surveyIsSaved);
}

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
