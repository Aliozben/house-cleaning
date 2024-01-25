import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Atlantis Cleaning LLC",
  description: `Cleanliness is the ultimate style.`,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
