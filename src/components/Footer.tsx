import Image from "next/image";
import Link from "next/link";
import {FOOTER, FOOTER_CONTACT_INFO} from "@/constants";

export default function Footer() {
  return (
    <footer className="py-12 md:pt-16 lg:pt-20 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={120}
                height={48}
                className="w-auto h-12 lg:h-24"
              />
            </Link>
            {/* <p className="text-gray-600 text-sm mb-6">
              Your trusted partner in innovative solutions.
            </p> */}
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div> */}
          </div>
          {FOOTER.map(column => (
            <div key={column.title}>
              <FooterColumn title={column.title}>
                <ul className="space-y-3">
                  {column.links.map(link => (
                    <li key={link.header}>
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.header}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="space-y-3">
                {FOOTER_CONTACT_INFO.links.map(link => (
                  <li
                    key={link.label}
                    className="flex flex-col sm:flex-row sm:justify-between lg:flex-col"
                  >
                    <span className="text-gray-500">{link.label}:</span>
                    <Link
                      href="/"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {link.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 col-span-full">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Atlantis Cleaning LLC. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-sm">
            <Link href="https://storyset.com">Illustrations by Storyset</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnPros = {
  title: string;
  children: any;
};

const FooterColumn = ({title, children}: FooterColumnPros) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
