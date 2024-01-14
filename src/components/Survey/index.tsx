"use client";
import React from "react";
import {ITheme, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import {themeJson} from "./theme";
import {useCallback} from "react";
import type {Survey as SurveyType} from "@prisma/client";

export default function SurveyComponent({
  questions,
}: {
  questions: Record<string, string | unknown>;
}) {
  const survey = new Model(questions);
  survey.applyTheme(themeJson as ITheme);
  survey.onComplete.add(
    useCallback(sender => {
      saveSurveyResult(sender.data);
    }, [])
  );
  return <Survey model={survey} />;
}

const saveSurveyResult = (data: SurveyType) => {
  console.log(JSON.stringify(data, null, 3));
};
