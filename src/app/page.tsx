import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">House Cleaning</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus pretium posuere. Proin tristique eu ipsum eu placerat. Donec
            lobortis consectetur ligula sed volutpat. Nunc suscipit leo eu nunc
            sagittis blandit. Nunc sollicitudin nulla dictum eros volutpat
            elementum. In hac habitasse platea dictumst. Praesent vel sagittis
            lacus.
          </p>
          <div className="mt-10 w-full gap-3 flex flex-col sm:flex-row">
            <Button type="button" text="Get An Offer" variant="btn_green" />
            <Button
              type="button"
              text="How we work?"
              variant="btn_white_text"
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <Image src="/hero.jpg" alt="" width={500} height={500} />
        </div>
      </section>
    </>
  );
}
