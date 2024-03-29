import {getSurvey, updateSurveyLastReadDate} from "@/utils/db";
import Checkbox from "@/components/Checkbox";

export default async function SurveyDetailsPage({
  params,
}: {
  params: {id: string};
}) {
  updateSurveyLastReadDate(params.id);
  const survey = await getSurvey(params.id);

  if (!survey) return <>Could not find the Survey </>;

  return (
    <div className=" px-6 py-12 sm:py-16 lg:px-8">
      <div
        className=" absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-xl">
        <div className="grid gap-x-8 gap-y-6 grid-cols-4">
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.nameInfo.name}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.nameInfo.lastname}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="email"
                value={survey.email || "-"}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                readOnly
                type="tel"
                value={survey.phone || "-"}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Cleaning Type
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.type}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Environment
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.environment || ""}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Cleaning Interval
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.existedFrequency}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Requested Cleaning Interval
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.desiredFrequency}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              When
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.date || ""}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Bedrooms
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="number"
                value={survey.rooms ? survey.rooms.bedroom || 0 : 0}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Bathrooms
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="number"
                value={survey.rooms ? survey.rooms.bathroom || 0 : 0}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Half Bathrooms
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.rooms ? survey.rooms.halfBathroom || 0 : 0}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Other Rooms
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.rooms ? survey.rooms.otherRoom || 0 : 0}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Footage
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="number"
                value={survey.estimatedFootage}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Contact Via
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={survey.contact}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex col-span-4 items-center justify-evenly md:justify-between">
            <div className="flex flex-col sm:flex-row gap-y-5 items-end sm:justify-around sm:col-span-4 sm:w-1/2">
              <Checkbox
                label="Basement"
                defaultStatus={survey.basement}
                readonly
              />
              <Checkbox label="Pet" defaultStatus={survey.pet} readonly />
            </div>
            <div className="flex flex-col sm:flex-row gap-y-5 items-end sm:justify-evenly sm:col-span-4 sm:w-1/2">
              <Checkbox
                label="Renovation"
                defaultStatus={survey.renovation}
                readonly
              />
              <Checkbox
                label="Dust"
                defaultStatus={survey.constructionDust || false}
                readonly
              />
            </div>
          </div>
          <div className="col-span-4">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Address
            </label>

            <div className="mt-2.5">
              <textarea
                value={survey.address}
                readOnly
                rows={2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {survey.additionalDetails && (
            <div className="col-span-4">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Additional Details
              </label>

              <div className="mt-2.5">
                <textarea
                  value={survey.additionalDetails}
                  readOnly
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
