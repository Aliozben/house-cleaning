"use client";
import Button from "@/components/Button";
import {NAV_ABOUT_PAGE, NAV_SERVICES_PAGE} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 pt-10 pb-16 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Atlantis Cleaning Service</h1>
          <p className="regular-20 mt-6 text-green-50 xl:max-w-[520px]">
            Professional Residential and Commercial Cleaning Service Cleanliness
            is the ultimate style.
          </p>
          <p className="regular-20 text-green-50 xl:max-w-[520px]">
            Let us create that style!
          </p>
          <p className=" font-medium text-greey-30 mt-3">
            Atlantis cleaning service is a woman-owned company. We serve the
            Maryland, Virginia and Washington DC areas.
          </p>
          <div className="mt-10 w-full gap-3 flex flex-col sm:flex-row">
            <Button
              type="button"
              text="Request An Estimate"
              variant="btn_green"
              onClick={() => router.push(NAV_SERVICES_PAGE.href)}
            />
            <Button
              type="button"
              text="How we work?"
              variant="btn_white_text"
              onClick={() => router.push(NAV_ABOUT_PAGE.href)}
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <Image src="/hero.jpg" alt="" width={500} height={500} />
        </div>
      </section>

      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20">
        <div className="flexEnd px-6 lg:mr-6">
          <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong> Why should you choose Atlantis Cleaning Service?</strong>
            </h2>
            <div className="regular-12 xl:regular-16 mt-5 text-gary-100">
              <li>We are certified professional cleaners.</li>
              <li>7/24 Customer Support.</li>
              <li>All cleaning supplies included.</li>
              <li><p className="pl-5 -mt-5">
                  We have the option of disinfecting with steam. Who does not
                  want a clean environment free of germs?
                </p>
              </li>
              <li>We are bonded and insured</li>
              <li>We guarantee satisfaction </li>
              <li>We give a 15% off your first cleaning job</li>
              <li>Refer a new friend get 15% off both</li>
              <li>20% off a full house cleaning during the holiday season</li>
            </div>
            <Image
              src="/cleaningGreen.svg"
              alt="camp-2"
              width={100}
              height={100}
              className="camp-quote"
            />
          </div>
        </div>
        <div className="hide-scrollbar mt-10 flex h-[340px] lg:-mt-80 w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <div
            className={`h-full w-full min-w-[1100px] bg-bg-img-1 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
          />
          <div
            className={`h-full w-full min-w-[1100px] bg-bg-img-2 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
          />
        </div>
      </section>

      <section className="flexCenter flex-col mb-5">
        <div className="padding-container max-container w-full pb-24 ">
          <Image src="/service.svg" alt="camp" width={40} height={40} />
          <p className="uppercase regular-18 mb-2 text-green-50">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">We provide:</h2>
            <div className="regular-16 text-gray-30 xl:max-w-[520px]">
              <Link href="/services">
                <li>General Cleaning </li>
                <li>Detailed Cleaning/One time cleaning </li>
                <li>Move in-move out Cleaning </li>
                <li>Construction Cleaning</li>
                <li>Office Cleaning</li>
              </Link>
            </div>
          </div>
        </div>

        <div className="flexCenter max-container relative h-fit">
          <Image
            src="/img-2-reverse.jpg"
            alt="boat"
            width={1040}
            height={580}
            className="h-full w-full min-h-[580px] object-cover object-center 2xl:rounded-5xl"
          />

          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <p className="bold-20 mb-2">Areas We Serve:</p>
              </div>

              <div className="flex w-full flex-col ">
                <div className="flex content-between gap-10">
                  <div>
                    <strong>MARYLAND</strong>
                    <p>Chevy Chase</p>
                    <p>Bethesda</p>
                    <p>Potomac</p>
                    <p>Silver Spring</p>
                    <p>South Kensington</p>
                    <p>Rockville</p>
                    <p>Forest Glen</p>
                    <p>Cabin John</p>
                    <p>Ashton</p>
                    <p>Aspen Hill</p>
                    <p>Olney</p>
                    <p>Gaithersburg </p>
                    <p>Montgomery village </p>
                    <p>Germantown</p>
                    <p>Clarksburg</p>
                  </div>
                  <div>
                    <strong>VIRGINIA</strong>
                    <p>Alexandria</p>
                    <p>Arlington</p>
                    <p>McLean</p>
                    <p>Vienna</p>
                    <p>Great Falls</p>
                    <p>Fairfax</p>
                  </div>
                  <div>
                    <strong className=" ">WASHINGTON, DC </strong>
                    <p>Cleveland Park</p>
                    <p>Georgetown</p>
                    <p>Wesley Heights</p>
                    <p>Palisades</p>
                    <p>Woodley Park</p>
                    <p>Kalorama</p>
                    <p>Capitol Hill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
