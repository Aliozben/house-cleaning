import Image from "next/image";
import React, {useState} from "react";

export default function Accordion({
  title,
  answer,
  icon,
  notes,
}: {
  title: string;
  answer: JSX.Element | string;
  icon: string;
  notes?: readonly string[];
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex gap-3">
          {" "}
          <div className="rounded-full p-4 lg:p-6 bg-green-50">
            <Image src={icon} alt="map" width={28} height={28} />
          </div>
          <h2 className="bold-18 lg:bold-20 mt-5 capitalize">{title}</h2>
        </div>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-green-50 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <button
          className="overflow-hidden text-left ml-14"
          onClick={() => setAccordionOpen(false)}
        >
          {answer}
          <div className="mt-2">
            {notes &&
              notes.map(note => (
                <h2 key={note} className="text-base font-bold text-red-600">
                  {note}
                </h2>
              ))}
          </div>
        </button>
      </div>
    </div>
  );
}
