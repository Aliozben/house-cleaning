"use client";

import {useState} from "react";
import {motion} from "framer-motion";
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
import Image from "next/image";
import {FEATURES} from "@/constants";

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
