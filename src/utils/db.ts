import prisma from "@/lib/db";

export async function getSurvey(surveyID: string) {
  try {
    return await prisma.survey.findUnique({
      where: {
        id: surveyID,
      },
    });
  } catch (error) {
    console.log("Could not found the given survey", error);
    return null;
  }
}
