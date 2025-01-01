"use client";
import {useState} from "react";
import {MapPin} from "lucide-react";
import Image from "next/image";

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

export function ServingLocations() {
  const [activeState, setActiveState] = useState<"MARYLAND" | "VIRGINIA">(
    "MARYLAND"
  );

  return (
    <div className="bg-[#f9fafb] m-6 rounded-lg shadow-lg p-6 ">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas We Serve</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="flex space-x-2 mb-4">
            {Object.keys(areas).map(state => (
              <button
                key={state}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeState === state
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveState(state as "MARYLAND" | "VIRGINIA")}
              >
                {state}
              </button>
            ))}
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {areas[activeState].map(city => (
              <li key={city} className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <Image src="/img-2-reverse.jpg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
