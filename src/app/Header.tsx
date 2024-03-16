import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
];
const Header = () => {
  return (
    <header className="shadow-md bg-white p-2 sticky top-0 w-full z-10">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"https://www.slim24pro.com/images/slim24pro.svg"}
                alt="Slim"
                width={188}
                height={68}
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-12 items-center">
            {navigation.map((item) => (
              <Link
                className="text-[18px] tracking-wide px-4 py-1 hover:bg-[#406213] hover:text-white"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={"/"}
              className="px-4 py-1 bg-[#406213] text-white uppercase buyNow hover:bg-orange-700 transition-all text-[18px] tracking-wide"
            >
              Buy Now
            </Link>
          </div>
          <Link href={"/"} className="md:hidden">
            <FaAlignJustify className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
