"use client";

import DashboardTabs from "@/app/dashboard/DashboardTabs";
import {useState} from "react";
import SurveyDetailsPage from "./SurveyDetails";

export const tabs = ["Surveys", "Users"] as const;

export type Tabs = (typeof tabs)[number];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tabs>("Surveys");

  return (
    <div className="min-h-full">
      <DashboardTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {activeTab === "Surveys" && <SurveyDetailsPage />}
          {activeTab === "Users" && <div>Users</div>}
        </div>
      </main>
    </div>
  );
}
