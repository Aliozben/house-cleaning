"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ChevronDown, ChevronRight} from "lucide-react";
import Image from "next/image";

export const FEATURES: Feature[] = [
  {
    title: "Move In - Move Out",
    icon: "/kitchen.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher.",
          "Dust light fixtures and remove cobwebs.",
          "Clean inside & outside of all empty cabinets and drawers.",
          "Clean sink and faucets.",
          "Clean all counters.",
          "Wash all baseboards, door frames & windowsill.",
          "Interior windows.",
          "Sliding door.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure.",
          "Dust light fixture and remove.",
          "cobwebs.",
          "Clean & shine mirrors.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Wash baseboards, door frames & windowsill.",
          "Clean interior window.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Remove cobwebs.",
          "Dust blinds.",
          "Clean inside of the windows.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean inside of the window.",
          "Sliding glass door.",
          "Dust all furniture.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Vacuum and mop the stairs/steps.",
        ],
      },
    ],
    notes: [
      "** Fireplaces, walls, exterior windows, extra refrigerators and balconies are not included in this cleaning. Special requests will be charged.",
    ],
  },
  {
    title: "Construction Cleaning",
    icon: "/construction.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean inside & outside of refrigerator, oven, stove top, microwave, and dishwasher.",
          "Dust light fixtures and remove cobwebs.",
          "Clean inside & outside of all empty cabinets and drawers.",
          "Clean sink and faucets.",
          "Clean all counters.",
          "Wash all baseboards, door frames & windowsills.",
          "Interior windows.",
          "Sliding door.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure.",
          "Dust light fixture.",
          "Clean & shine mirrors.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Wash baseboards, door frames windowsill.",
          "Clean interior windows.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Dust blinds.",
          "Clean inside of the windows.",
          "Clean inside and outside of empty.",
          "Cabinets and drawers.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean interior windows.",
          "Sliding glass door.",
          "Dust all furniture.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Vacuum and mop the steps.",
        ],
      },
    ],
    notes: [],
  },
  {
    title: "Office Cleaning",
    icon: "/office.svg",
    variant: "green",
    rooms: [],
    notes: [
      "Please contact us for more information about our office cleaning services.",
    ],
  },
  {
    title: "Detailed Cleaning",
    icon: "/cleaningGreen.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean outside and inside of refrigerator (must be empty).",
          "Clean outside and inside of oven.",
          "Clean outside and inside edge of dishwasher.",
          "Clean inside and out of microwave.",
          "Dust light fixtures & remove cobwebs.",
          "Wash all cabinet fronts.",
          "Wipe clean small appliances (coffee machine,toaster,blender etc.).",
          "Clean stove top & drip pans.",
          "Clean all counters and sinks.",
          "Wash table and chairs.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, foor, and any enclosure.",
          "Dust light fixture.",
          "Clean and shine mirrors.",
          "Clean outside of cabinets and drawers.",
          "Clean and polish faucet, sink.",
          "Toilets thoroughly cleaned and sanitized.",
          "Spot clean baseboards.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Change bed linens.",
          "Remove cobwebs.",
          "Window sills and interior windows.",
          "Ceiling fans.",
          "Sliding doors.",
          "Fix and dust blinds.",
          "Take trash out.",
          "Door frame.",
          "Dust wall hangings, furniture &decorative items.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Baseboards.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Remove cobwebs.",
          "Vacuum the couches.",
          "Dust blinds and ceiling fans.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Wash baseboards.",
          "Window sills and only interior windows.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Dust table and chairs.",
          "Vacuum and mop the stairs/steps.",
        ],
      },
    ],
    notes: [
      "Special requests and areas outside of this list will be charged extra.",
      "Ask for steam cleaning for kitchen counters,sink,couches(sofa) and toilet bowls.",
      "* We do not recommend or guarantee leather,wood and surfaces that will be adversely affected by contact with steam.",
    ],
  },
  {
    title: "General Cleaning",
    icon: "/generalCleaning.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean outside of refrigerator.",
          "Clean outside and inside of oven.",
          "Clean outside of dishwasher.",
          "Clean inside and out of microwave.",
          "Wipe clean small appliances (coffee maker, toaster ,blender etc.)",
          "Clean stove top or glass-top & drip pan",
          "Clean sink and faucets",
          "Countertops",
          "Wash table and chairs",
          "Vacuum and mop floors",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, foor, and any enclosure.",
          "Clean and shine mirrors.",
          "Clean outside of cabinets.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Vacuum and wash floors",
          "Take trash out.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Remove cobwebs.",
          "Ceiling fans.",
          "Dust furniture.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Sliding door.",
          "Take trash out.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Vacuum upholstered furniture.",
          "Sliding door.",
          "Fix couches and pillows ,blinds.",
          "Tables and chairs.",
          "Dust tv unit(We do not clean photo frame, tv or computers screens ).",
          "Vacuum and mop the steps.",
          "Flat and high touch surfaces hand-wiped.",
          "Vacuum stairs.",
        ],
      },
    ],
    notes: [
      "Special requests and areas outside of this list will be charged extra.",
    ],
  },
] as const;

interface Feature {
  title: string;
  icon: string;
  variant: string;
  rooms: Room[];
  notes: string[];
}

interface Room {
  name: string;
  bulletPoints: string[];
}

export default function CleaningServices() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].title);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
        Our Professional Cleaning Services
      </h1>
      <Tabs
        defaultValue={FEATURES[0].title}
        className="w-full"
        onValueChange={setActiveFeature}
      >
        <TabsList className="flex flex-wrap h-full justify-center gap-2  mb-6">
          {FEATURES.map(feature => (
            <TabsTrigger
              key={feature.title}
              value={feature.title}
              className="flex items-center px-4 py-2 rounded-full bg-white shadow-sm hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="whitespace-nowrap">{feature.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-grow">
          {FEATURES.map(feature => (
            <TabsContent
              key={feature.title}
              value={feature.title}
              className="mt-0"
            >
              <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
              >
                <Card className="bg-white shadow-lg">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle className="text-xl md:text-2xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80 text-sm md:text-base">
                      Professional cleaning services tailored for{" "}
                      {feature.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {feature.rooms.map((room, index) => (
                        <AccordionItem key={room.name} value={`item-${index}`}>
                          <AccordionTrigger className="text-base md:text-lg font-semibold">
                            {room.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-none pl-2 md:pl-6 space-y-2">
                              {room.bulletPoints.map((point, i) => (
                                <li key={i} className="flex items-start">
                                  <Badge
                                    variant="secondary"
                                    className="mr-2 mt-1 flex-shrink-0"
                                  >
                                    ✓
                                  </Badge>
                                  <span className="text-sm md:text-base">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    {feature.notes.length > 0 && (
                      <div className="mt-6  p-4 bg-red-200 rounded-lg">
                        <h3 className="font-semibold text-base md:text-lg mb-2">
                          Important Notes:
                        </h3>
                        <ul className="list-disc pl-4 md:pl-6 space-y-1">
                          {feature.notes.map((note, index) => (
                            <li
                              key={index}
                              className="text-xs md:text-sm italic text-muted-foreground"
                            >
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
