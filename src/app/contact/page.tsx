import {FOOTER_CONTACT_INFO} from "@/constants";

export default function ContactPage() {
  return (
    <div className="min-w-screen flex items-center justify-center px-5 py-5">
      <div className="w-full lg:w-1/2 mx-auto rounded-lg bg-gray-100 shadow-lg px-5 pt-5 pb-5 text-gray-800">
        <div className="w-full pt-1 pb-5"></div>
        <div className="w-full mb-10">
          <div className="text-3xl text-green-10 text-left leading-tight h-3">
            “
          </div>
          <div className="text-green-10 text-center">
            <h1 className="text-6xl ">{FOOTER_CONTACT_INFO.title}</h1>
            {FOOTER_CONTACT_INFO.links.map(link => (
              <div key={link.label} className="">
                <p className="whitespace-nowrap">{link.label}:</p>
                <p className="medium-14 whitespace-nowrap text-white">
                  {link.value}
                </p>
              </div>
            ))}
          </div>
          <div className="text-3xl text-green-10 text-right leading-tight mt-1 h-3">
            ”
          </div>
        </div>
      </div>
    </div>
  );
}
