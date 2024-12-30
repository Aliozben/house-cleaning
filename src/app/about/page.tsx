import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-container lg:gap-20 xl:flex-row items-end flex flex-col lg:flex-row justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 px-5">
      <div className="w-full bg-white lg:w-1/2 flex flex-col ml-10 lg:px-2 xl:px-0 ">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-green-10 mt-2">
          About
        </p>
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-green-10">
          Us
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-12 lg:mb-12 px-5">
          Atlantis cleaning service is a woman owned small business in MDV
          areas. As people who have worked in cleaning services for years and
          served professionally, we are managed and owned by young entrepreneurs
          and do our job properly for our customers. We guarantee satisfaction
          with our comparative prices and we are doing our best and will
          continue to do so!
        </p>
      </div>
      <Image
        src="/worldCleaning.svg"
        width={250}
        height={250}
        alt="world"
        className="relative right-0 -bottom-10 lg:-bottom-28 w-1/2  items-end flex lg:items-end justify-center"
      />
    </div>
  );
}
