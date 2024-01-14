"use client";

import {NAV_LINKS} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

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
      <div className="inline-block cursor-pointer lg:hidden">
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button className="relative  rounded-md  p-2 text-gray-400 hover:bg-green-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="space-y-1 absolute -mx-20 backdrop-blur-sm rounded-md">
                  {NAV_LINKS.map(item => (
                    <Disclosure.Button
                      key={item.key}
                      as="a"
                      href={item.href}
                      className=" tex-gray-50 hover:bg-green-50 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                      aria-current={item ? "page" : undefined}
                    >
                      {item.label}
                    </Disclosure.Button>
                  ))}
                  {status === "authenticated" && (
                    <Disclosure.Button
                      as="a"
                      href="/dashboard"
                      className=" hover:tex-gray-50 hover:bg-green-50 bg-gray-50 text-white block  px-3 py-2 text-base font-medium"
                    >
                      Dashboard
                    </Disclosure.Button>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </nav>
  );
}
