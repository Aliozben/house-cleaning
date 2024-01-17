"use client";

import {classNames} from "@/utils/style";
import {Disclosure} from "@headlessui/react";

type DashboardTabsProps = {};
export default function DashboardTabs({}: DashboardTabsProps) {
  const tabs = ["Surveys", "Users"] as const;
  let activeTab = "Surveys";
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div className="ml-10  space-x-4 flex items-center">
            <div className=" mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold tracking-tight text-green-10">
                Dashboard
              </h2>
            </div>
            {tabs.map(tab => (
              <a
                key={tab}
                href={`/dashboard/${tab.toLowerCase()}`}
                className={classNames(
                  activeTab === tab
                    ? "bg-green-50 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
