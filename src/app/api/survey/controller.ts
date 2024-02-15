import SurveySubmitEmail from "@/emails/SurveySubmit";
import {sendMail} from "@/lib/email";
import {Survey} from "@prisma/client";
import prisma from "@/lib/db";

export const nofityAdminsForSurveySubmit = async (survey: Survey) => {
  const adminEmails = await prisma.user.findMany({
    select: {email: true},
  });
  adminEmails.forEach(user =>
    sendMail({
      html: SurveySubmitEmail(survey),
      subject: "New Request Is Arrived!",
      to: user.email,
    })
  );
};
