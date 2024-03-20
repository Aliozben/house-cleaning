"use client";

import SurveyComponent from "@/components/Survey";
import "survey-core/defaultV2.min.css";
import {questions} from "./questions";
import {notifyAdminsOnSurveySubmit} from "@/actions/email";
import {Model} from "survey-core";
import saveSurvey from "@/actions/survey";
import {z} from "zod";

export default function ServicesPage() {
  return (
    <div className=" max-container padding-container  gap-20 md:gap-28  xl:flex-row">
      <SurveyComponent
        questions={questions}
        callback={(sender: Model) => {
          saveSurvey(sender.data).then(survey => {
            if (survey instanceof z.ZodError) return survey;
            notifyAdminsOnSurveySubmit(survey);
          });
        }}
      />
    </div>
  );
}
