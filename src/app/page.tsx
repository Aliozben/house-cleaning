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
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Atlantis Cleaning Service</h1>
          <p className="regular-20 mt-6 text-green-50 xl:max-w-[520px]">
            Professional Residential and Commercial Cleaning Service Cleanliness
            is the ultimate style. Let us create that style!
          </p>
          <p className=" font-medium text-greey-30 mt-3">
            Atlantis cleaning service is a woman-owned company. We serve the
            Maryland, Virginia and Washington DC areas.
          </p>
          <div className="mt-10 w-full gap-3 flex flex-col sm:flex-row">
            <Button
              type="button"
              text="Get An Offer"
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
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <div
            className={`h-full w-full min-w-[1100px] bg-bg-img-1 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
          />
          <div
            className={`h-full w-full min-w-[1100px] bg-bg-img-2 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
          />
        </div>

        <div className="flexEnd mt-10 px-6 lg:-mt-80 lg:mr-6">
          <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong> Why should you choose Atlantis Cleaning Service?</strong>
            </h2>
            <div className="regular-14 xl:regular-16 mt-5 text-white">
              <li>We are certified professional cleaners.</li>
              <li>All cleaning supplies included. </li>
              <li>
                We have the option of disinfecting with steam. Who does not want
                a clean environment free of germs?
              </li>
              <li>We are bonded and insured</li>
              <li>We guarantee satisfaction </li>
              <li>We give a 15% off your first cleaning job</li>
              <li>Refer a new friend get 15% off both</li>
              <li>
                <strong>
                  20% off a full house cleaning during the holiday season
                </strong>
              </li>
            </div>
            <Image
              src="/cleaningGreen.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
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
            {/* <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            /> */}
            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <p className="bold-20 mb-2">Areas we serve:</p>
              </div>

              <div className="flex w-full flex-col ">
                <div className="flex content-between gap-10">
                  <div>
                    <strong>MARYLAND</strong>
                    <li>Chevy Chase</li>
                    <li>Bethesda</li>
                    <li>Potomac</li>
                    <li>Silver Spring</li>
                    <li>South Kensington</li>
                    <li>Rockville</li>
                    <li>Forest Glen</li>
                    <li>Cabin John</li>
                    <li>Ashton</li>
                    <li>Aspen Hill</li>
                    <li>Olney</li>
                    <li>Gaithersburg </li>
                    <li>Montgomery village </li>
                    <li>Germantow</li>
                    <li>Clarksburg</li>
                  </div>
                  <div>
                    <strong>VIRGINIA</strong>
                    <li>Alexandria</li>
                    <li>Arlington</li>
                    <li>McLean</li>
                    <li>Vienna</li>
                    <li>Great Falls</li>
                    <li>Fairfax</li>
                  </div>
                  <div>
                    <strong className="pt-3">WASHINGTON, DC </strong>
                    <li>Cleveland Park</li>
                    <li>Georgetown</li>
                    <li>Wesley Heights</li>
                    <li>Palisades</li>
                    <li>Woodley Park</li>
                    <li>Kalorama</li>
                    <li>Capitol Hill</li>
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
