import prisma from "@/lib/db";

export async function DELETE({params}: {params: {surveyID: string}}) {
  const {surveyID} = params;
  try {
    const res = await prisma.survey.delete({
      where: {
        id: surveyID,
      },
    });
    return new Response(JSON.stringify(res));
  } catch (error) {
    console.error(`Could not delete survey with id: ${surveyID} `, error);
    return new Response(JSON.stringify(error));
  }
}
