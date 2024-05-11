"use client";

import Image from "next/image";
import Button from "./button";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { globalLinks } from "@/data/links";

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
    <a
      href={link}
      className="link font-medium text-lg rotate-hover hover:text-lobster"
    >
      <p>{children}</p>
    </a>
  );
};

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header>
      <div className="navbar w-full h-20 fixed bg-white shadow-sm z-50">
        <div className="grid grid-cols-[1fr_auto_1fr] h-full mx-[5vw] lg:mx-[10vw] gap-x-5 items-center">
          <div className="flex flex-nowrap justify-start">
            {/* --------------------- DESKTOP NAVBAR --------------------- */}
            <nav className="hidden lg:flex flex-row gap-2 md:gap-6 xl:gap-12 h-full justify-center items-center">
              {links.map((link) => (
                <NavbarLink key={link[0]} link={link[0]}>
                  {link[1]}
                </NavbarLink>
              ))}
            </nav>

            {/* --------------------- MOBILE NAVBAR --------------------- */}

            <nav className="flex lg:hidden flex-row md:gap-6 lg:gap-12 h-full justify-center items-center">
              <div
                className={
                  "px-3 py-3 border-2 transition-all duration-300 bg-orange border-orange text-white cursor-pointer hover:bg-red hover:border-red z-50"
                }
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {!isMobileNavOpen ? <GiHamburgerMenu /> : <MdClose />}
              </div>
              <div
                className="w-screen h-screen bg-white absolute top-0 left-0 z-10 flex-col justify-center items-center gap-10"
                style={{ display: isMobileNavOpen ? "flex" : "none" }}
              >
                {links.map((link) => (
                  <NavbarLink key={link[0]} link={link[0]}>
                    {link[1]}
                  </NavbarLink>
                ))}
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
            <Button link={globalLinks.eshop.cs} inverse={false} blank>
              Do e-shopu &raquo;
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
