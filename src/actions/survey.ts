"use server";

import {Survey} from "@prisma/client";
import {z} from "zod";
import prisma from "@/lib/db";
import {notifyAdminsOnSurveySubmit} from "./email";

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
  estimatedFootage: z.number(),
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

export default async function saveSurvey(survey: unknown) {
  //TODO: rateLimitter
  const validSurvey = surveySchema.safeParse(survey);
  if (!validSurvey.success) {
    console.error(validSurvey.error.issues);
    return;
  }
  const surveyIsSaved = await prisma.survey.create({data: validSurvey.data});
  notifyAdminsOnSurveySubmit(surveyIsSaved);
  console.log("[saveSurvey], survey is saved.", surveyIsSaved);
}
