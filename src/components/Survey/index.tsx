"use client";

import React from "react";
import {Model, ITheme} from "survey-core";
import {Survey} from "survey-react-ui";
import {themeJson} from "./theme";
import {useCallback} from "react";
import {useRouter} from "next/navigation";

export default function SurveyComponent({
  questions,
  callback,
}: {
  questions: Record<string, string | unknown>;
  callback: (sender: Model) => void;
}) {
  const router = useRouter();

  const survey = new Model(questions);
  survey.applyTheme(themeJson as ITheme);
  survey.onComplete.add(
    useCallback(
      (sender, options) => {
        options.showSaveInProgress("Saving...");
        callback(sender);
        router.push("/");
      },
      [callback, router]
    )
  );

  return <Survey model={survey} />;
}
