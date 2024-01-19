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

export async function updateSurveyLastReadDate(surveyID: string) {
  try {
    return await prisma.survey.update({
      where: {
        id: surveyID,
      },
      data: {
        lastReadDate: new Date(),
      },
    });
  } catch (error) {
    console.log("Could not update the last read date", error);
    return null;
  }
}
