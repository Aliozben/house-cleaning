import DashboardTabs from "./DashboardTabs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashboardTabs />
      {children}
    </section>
  );
}
