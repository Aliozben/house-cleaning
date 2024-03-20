"use server";

import prisma from "@/lib/db";
import {sendEmail} from "@/lib/email";
import SurveySubmitEmail from "@/emails/SurveySubmit";
import {Survey} from "@prisma/client";

export async function notifyAdminsOnSurveySubmit(survey: Survey) {
  const adminEmails = await prisma.user.findMany({
    select: {email: true},
  });
  try {
    await Promise.all(
      adminEmails.map(async user => {
        await sendEmail({
          to: user.email,
          subject: "You've been confirmed!",
          html: SurveySubmitEmail(survey),
        });
      })
    );
    console.log("[notifyAdminsOnSurveySubmit], notified all of the admins.");
  } catch (error) {
    console.error(
      "[notifyAdminsOnSurveySubmit], Something happened while sending email.",
      error
    );
  }
}
