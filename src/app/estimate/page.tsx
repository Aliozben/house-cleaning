import SurveyComponent from "@/components/Survey";
import "survey-core/defaultV2.min.css";
import {questions} from "./questions";

export default function ServicesPage() {
  return (
    <div className=" max-container padding-container  gap-20 md:gap-28  xl:flex-row">
      <SurveyComponent questions={questions} />
    </div>
  );
}
