import SurveySubmitEmail from "@/emails/SurveySubmit";
import {sendMail} from "@/lib/email";
import {getSurvey} from "@/utils/db";
import {NextResponse} from "next/server";
import {nofityAdminsForSurveySubmit} from "../survey/controller";
// import {nofityAdminsForSurveySubmit} from "@/actions/emails/action";
import {sendEmail} from "@netlify/emails";

export async function GET() {
  // await nofityAdminsForSurveySubmit();
  const survey = await getSurvey(process.env.SURVEY_EX!);
  if (!survey) return NextResponse.json({error: "Survey not found"});

  // nofityAdminsForSurveySubmit(survey);
  console.log("received survey starting to send email");
  const response = await sendMail({
    subject: "Test",
    to: process.env.PERSONAL_MAIL!,
    html: SurveySubmitEmail(survey),
  });
  console.log(response);
  return NextResponse.json("emails are sent");
}
