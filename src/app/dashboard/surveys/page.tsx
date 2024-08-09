"use client";
import Link from "next/link";
import {MinusCircleIcon} from "@heroicons/react/24/outline";
import useSWR, {useSWRConfig} from "swr";
import {fetcher} from "@/utils/api";
import {Survey} from "@prisma/client";
import Loading from "@/app/loading";

function SurveyList() {
  const {mutate} = useSWRConfig();
  const {
    data: surveys,
    isLoading,
    error,
  } = useSWR<Pick<Survey, "nameInfo" | "id" | "lastReadDate">[], Error>(
    "/api/survey",
    fetcher
  );
  if (isLoading) return <Loading />;
  if (error || !surveys) {
    error ?? console.log("Couldn't fetch survey list. ", error);
    return <div>Error incurded.</div>;
  }

  const removeSurvey = (survey: Pick<Survey, "nameInfo" | "id">) => {
    const options = {
      optimisticData: surveys.filter(s => s.id !== survey.id),
    };
    mutate(
      "/api/survey",
      fetch(`/api/survey/${survey.id}`, {
        method: "DELETE",
      }),
      options
    );
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {surveys.length > 0 ? (
        surveys.map(survey => (
          <li
            key={survey.id}
            className="flex justify-between items-center gap-x-6 py-5"
          >
            <Link href={`/dashboard/surveys/${survey.id}`} key={survey.id}>
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {survey.nameInfo.name + " " + survey.nameInfo.lastname}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"></div>
            </Link>
            <div className="flex">
              <div className="text-right mr-5">
                <p className="text-sm leading-6 text-gray-900">Last Read At:</p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {survey.lastReadDate ? (
                    <time dateTime={new Date().toUTCString()}>
                      {new Date(survey.lastReadDate).toUTCString()}
                    </time>
                  ) : (
                    <p className="font-bold text-red-600">NEW!</p>
                  )}
                </p>
              </div>

              <button onClick={() => removeSurvey(survey)}>
                <MinusCircleIcon className="w-6 h-6 text-red-600" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <p>No surveys yet.</p>
      )}
    </ul>
  );
}

export default function SurveysPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul role="list" className="divide-y divide-gray-100">
        <SurveyList />
      </ul>
    </div>
  );
}
