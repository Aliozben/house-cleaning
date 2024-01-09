import SurveyComponent from "@/components/Survey";
import "survey-core/defaultV2.min.css";
import {questions} from "./questions";

export default function ServicesPage() {
  return (
    <div>
      <SurveyComponent questions={questions} />
    </div>
  );
}
