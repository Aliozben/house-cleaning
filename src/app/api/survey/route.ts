import {z} from "zod";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";
import {limitter} from "@/lib/rateLimitter";

const surveySchema = z.object({
  type: z.string(),
  environment: z.string().optional(),
  existedFrequency: z.string(),
  desiredFrequency: z.string(),
  rooms: z
    .object({
      bathroom: z.number().optional(),
      bedroom: z.number().optional(),
      halfBathroom: z.number().optional(),
      otherRoom: z.number().optional(),
    })
    .optional(),
  estimatedFootage: z.string(),
  basement: z.boolean(),
  pet: z.boolean(),
  renovation: z.boolean(),
  contructionDust: z.boolean().optional(),
  date: z.string().optional(),
  additionalDetails: z.string().optional(),
  contact: z.string(),
  nameInfo: z.object({
    name: z.string(),
    lastname: z.string(),
  }),
  phone: z.string().optional(),
  email: z.string().optional(),
  address: z.string(),
});

export async function POST(req: NextRequest) {
  const {success} = await limitter(req);
  if (!success) return NextResponse.json("Too many request!", {status: 403});

  const body = await req.json();
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
