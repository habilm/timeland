import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 px-6 py-3">
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block w-1/3"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center  w-full md:w-1/3 order-3 md:order-1"
          id="menu"
        >
          <nav className="">
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#location"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#contact-us"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2 w-1/3 flex justify-center">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            <Image
              src="/images/time-land-watches-logo.jpeg?d"
              alt="Time Land Watches Logo"
              width={500}
              height={100}
              className="max-w-56 "
            />
          </Link>
        </div>

        <div
          className="order-2 md:order-3 flex items-center w-1/3"
          id="nav-content"
        ></div>
      </div>
    </nav>
  );
}
