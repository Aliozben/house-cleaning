import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Cleaning",
  description: `let's clean your house!`,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
