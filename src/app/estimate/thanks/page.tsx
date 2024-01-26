import Image from "next/image";

export default function ThanksPage() {
  return (
    <div className="max-container padding-container gap-5 md:pb-32 md:gap-28 lg:py-20 flex flex-col md:flex-row items-center">
      <Image
        className="md:ml-10"
        src="/thanks.svg"
        alt="thanks"
        width={500}
        height={500}
      />
      <h2 className="bold-20 w-full md:ml-10 md:mt-10 mb-5">
        We will get back to you as soon as possible.
      </h2>
    </div>
  );
}
