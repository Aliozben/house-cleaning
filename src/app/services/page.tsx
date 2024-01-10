import {FEATURES} from "@/constants";
import Image from "next/image";

export default function Services() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col ">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map(feature => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.descs}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type FeatureItem = {
  title: string;
  icon: string;
  description: {room: string; descs: string[]}[];
};

const FeatureItem = ({title, icon, description}: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <div className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description.map(item => (
          <>
            <span className="font-bold">{item.room}</span>
            <ul className="list-disc ml-5 mt-2">
              {item.descs.map(desc => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </li>
  );
};
