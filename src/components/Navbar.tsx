"use client";

import {NAV_LINKS} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const {status} = useSession();
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="./next.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 tex-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {status === "authenticated" && (
        <div className="lg:flexCenter hidden">
          <Button
            text="Dashboard"
            type="button"
            variant="btn_dark_green"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      )}
      <Image
        src="./vercel.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}
