"use client";
import Accordion from "@/components/Accordion";
import {FEATURES} from "@/constants";
import Image from "next/image";
import {useState} from "react";

export default function Services() {
  return (
    <div className="max-container padding-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {" "}
      {FEATURES.map(feature => (
        <Accordion
          key={feature.title}
          title={feature.title}
          icon={feature.icon}
          answer={<FeatureItem rooms={feature.rooms} />}
          notes={feature.notes}
        />
      ))}
    </div>
  );
}

type FeatureItem = {};

const FeatureItem = ({rooms}: {rooms: (typeof FEATURES)[number]["rooms"]}) => {
  return (
    <div className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none ">
      {rooms.map(room => (
        <div className="mt-5" key={room.name}>
          <h2 className="font-bold font-x">{room.name}</h2>
          <div className="list-disc ml-5 mt-2">
            {room.bulletPoints.map(point => (
              <li key={point}>{point}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
