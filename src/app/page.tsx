"use client";
import Button from "@/components/Button";
import {NAV_GET_OFFER, NAV_SERVICES_PAGE} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {MapPin} from "lucide-react";
import {useState} from "react";
import {ServingLocations} from "@/components/home/ServingLocations";

const areas = {
  MARYLAND: [
    "Chevy Chase",
    "Bethesda",
    "Potomac",
    "Silver Spring",
    "South Kensington",
    "Rockville",
    "Forest Glen",
    "Cabin John",
    "Ashton",
    "Aspen Hill",
    "Olney",
    "Gaithersburg",
    "Montgomery village",
    "Germantown",
    "Clarksburg",
  ],
  VIRGINIA: ["Alexandria", "Arlington", "McLean", "Tysons", "Fairfax"],
};

const services = [
  "General Cleaning",
  "Detailed Cleaning/One time cleaning",
  "Move in-move out Cleaning",
  "Construction Cleaning",
  "Office Cleaning",
];
export default function Home() {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 pt-10 pb-16 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Atlantis Cleaning Service</h1>
          <p className="regular-20 mt-6 text-green-50 xl:max-w-[520px]">
            Professional Residential and Commercial Cleaning Services
          </p>
          <p className=" font-medium text-greey-30 mt-3">
            Atlantis Cleaning Service, a proud woman-owned business, provides
            exceptional cleaning solutions to clients across Maryland and
            Virginia.
          </p>
          <div className="mt-10 w-full gap-3 flex flex-col sm:flex-row">
            <Link href={NAV_GET_OFFER.href}>
              <Button
                type="button"
                text="Request An Estimate"
                variant="btn_green"
              />
            </Link>
            <Link href={NAV_SERVICES_PAGE.href}>
              <Button
                type="button"
                text="How we work?"
                variant="btn_white_text"
              />
            </Link>
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
              <li>Certified and highly trained professional cleaners.</li>
              <li>24/7 customer support for your convenience.</li>
              <li>
                All cleaning supplies provided—no additional costs or hassle.
              </li>
              <li>
                Steam disinfection services available for a thoroughly
                sanitized, germ-free environment.
              </li>
              <li>Fully bonded and insured for your peace of mind.</li>
              <li>
                Commitment to 100% satisfaction—guaranteed results every time.
              </li>
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

      <section className="">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center mb-4">
              <Image
                src="/service.svg"
                alt="Services icon"
                width={40}
                height={40}
                className="mr-4"
              />
              <p className="text-green-600 font-semibold uppercase tracking-wide">
                We are here for you
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-0 lg:w-1/3">
                We provide:
              </h2>
              <ul className="text-lg text-gray-700 lg:w-2/3 space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ServingLocations />
        </div>

        <div className="bg-green-600 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready for a spotless space?
            </h2>
            <p className="mt-4 text-lg leading-6">
              Book our professional cleaning service today and experience the
              difference!
            </p>
            <div className="mt-8">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-10"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
