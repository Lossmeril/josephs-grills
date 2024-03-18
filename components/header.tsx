"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";

import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  ["/", "Domů"],
  ["/grily", "Grily"],
  ["/o-nas", "O nás"],
  ["/kontakt", "Kontakt"],
];

interface NavbarLinkProps {
  children: React.ReactNode;
  link: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link }) => {
  return (
    <Link
      href=""
      className="font-medium text-lg rotate-hover hover:text-lobster"
    >
      <p>{children}</p>
    </Link>
  );
};

const Header = () => {
  return (
    <header>
      <div className="navbar w-screen h-20 fixed bg-white shadow-sm z-50">
        <div className="grid grid-cols-[1fr_auto_1fr] h-full mx-[5vw] lg:mx-[10vw] gap-x-5 items-center">
          <div className="flex flex-nowrap justify-start">
            {/* --------------------- DESKTOP NAVBAR --------------------- */}
            <nav className="hidden lg:flex flex-row gap-2 md:gap-6 xl:gap-12 h-full justify-center items-center">
              {links.map((link) => (
                <NavbarLink key={link[0]} link="">
                  {link[1]}
                </NavbarLink>
              ))}
            </nav>

            {/* --------------------- MOBILE NAVBAR --------------------- */}

            <nav className="flex lg:hidden flex-row md:gap-6 lg:gap-12 h-full justify-center items-center">
              <div
                className={
                  "px-3 py-3 border-2 transition-all duration-300 bg-orange border-orange text-white cursor-pointer hover:bg-red hover:border-red"
                }
              >
                <GiHamburgerMenu />
              </div>
            </nav>
            <div className="flex flex-grow"></div>
          </div>

          <a href="/">
            <div className="w-[150px] relative aspect-[15/5]">
              <Image
                src="/img/logo-full-color.png"
                alt="Fresh Lobster logo"
                className="object-contain"
                fill
              />
            </div>
          </a>

          <div className="hidden md:flex flex-nowrap justify-end">
            <div className="flex flex-grow"></div>
            <Button link="/" inverse={false}>
              AB Action Button
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
