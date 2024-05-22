"use client";

import Image from "next/image";
import Button from "./button";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

import i18n from "@/modules/i18n";
import { useTranslation } from "react-i18next";

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
  const localeFlags = [
    {
      name: "česká vlajka",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO3W3StDYRwH8PO/uXHl0k5udiEvQ4pyYWWOw7w9e01e5jWWlZDX7WCbkMaEvKQJkdTIsEN4EL5yzM0indmeC/nV9/rT7+l5fr+H4/7rz1e+2Yf20RU4pVWm4TL0bvDiDCaWT3D9CNw8pT7OT1gYDkPbuICSlgD2Tm/ZwUSS0eiJorQrBI04A6f/APLDKxuYxCKOnCHbHIDOtoCt42t2MFG6l1HWuw+N6IVjcheX9y9sYBKLcewcubYgckxzWD+MsoNJLOX9R+BrfDAPbiNy+8wOJpKMuskLFDavQVs/i0Aowg4msehdR8iq8aOqbw1h+ZEdTCQZDe4rFDs2kWX0wbsRZgsXNa2C14+hJ1OHpbQ01eESOmphGtXiECJmO6jVqjpLamDlctmD0BrcCDY4EgKpWlh5TsIUrNUDiFoS65Kqgd8HSJ5pEbmV49gibb8G6U/wx8jcg8YgocPowo3FljSUfgcrS6J+HgXCOEKkNakg/QpW1mLnDniDB67aPtxZkg/SeFj5CBj9KBVGcWhqThlI42G+wg1PXTfuU9gljYfLdHZ40zMSmj6/Cfdff77eAJWfW2IR9ZwPAAAAAElFTkSuQmCC",
    },
    {
      name: "english flag",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2Wz08aURDH+d+8E8V40hiNHjx58aYHrya2aZsa2tQmrY2JTRp7qLa1WGloNaggqClYI2RBBfkpsPxaFthvMw/3rbDQVK3lwiTDJuS9+czOm/edNRg61rH7MuPkR7TDDfQjJ5NQzRcr4/k3EbOf0y2dzN7VxZzsT2vJ3+7kEA2n4JuZgau/XwM7e3sRWVkBFIUFksoKNrxFPFi7G/jp1wwOTktIWK1w9vUhYDajWixq4LRwCs/EBH6OjyMvCPztw+kKFraytwJ/OixAjCRwPD2Ng5ERZL1eHpeDWWZBCTGLhWUmzM2hUiiwRVQEyvrJeuavwK83swhflhFdXYWjpwfB+Xko5XKtkrKCdU9BA6ublugszhI4obMYGEBqd5dnmZMU9hatwI8tGWydSMidnvPqFQKBpr1jbASTP1xLs/NNutzYHxrCr6kplGIxHiCYKOvA7/fySGdlhJaW4OjuZk+1X1L5Kt45cnWMpmDVX9hE+EM5nC0ssOa7WF7mwRrBOZ8Ph2NjOJqchBSNsv+qCrDjl/Doiz62UQXfxq6Db2pGFawG+V9ubDu4baWebaI4e4ES7yWSVFUIRI9XBw6nKjxoxuXC/vAwuw3iWbipAhqbgemu5ktXREWpE4JoUsKiPasDU2DaV5Rr+0gw6BY4TSZ2Ky7iBby5poB14JffRX5HyYrnmhCIfgG2Yy3zRrAa0GzNwBOSeYxSPM7EyD04iEv7NqsiKSAHb/sldu9YtpVKnRAch0t41jCtWoFVJ8Eg4WhW/oQQ0jdX9ugIB6OjtQXBCJad9YpzkyFBwkESWrniV2UZ54uLcJhMGphGFY0sGhDxDSsrCWnvv5jH8zYRQlw7QikS0cA0nGlIB4NJvPqhH4N3/RAg/+DO86bl4LZ8+nSsY4Z7st/VsmGwPVLtawAAAABJRU5ErkJggg==",
    },
  ];

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [localeFlag, setLocaleFlag] = useState(i18n.language === "cs" ? 1 : 0);

  const { t } = useTranslation();

  const changeLang = () => {
    return () => {
      if (i18n.language === "cs") {
        i18n?.changeLanguage("en");
        localStorage.setItem("language", "en");
        setLocaleFlag(0);
      } else {
        i18n?.changeLanguage("cs");
        localStorage.setItem("language", "cs");
        setLocaleFlag(1);
      }
    };
  };

  const links = [
    ["/", t("navbarHome")],
    ["/grily", t("navbarGrills")],
    ["/o-nas", t("navbarAbout")],
    ["/kontakt", t("navbarContact")],
  ];

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
                alt="Joesph's logo"
                className="object-contain"
                fill
              />
            </div>
          </a>

          <div className="flex md:hidden flex-nowrap justify-end">
            <button onClick={changeLang()} className="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={localeFlags[localeFlag].name}
                src={localeFlags[localeFlag].img}
              />
            </button>
          </div>

          <div className="hidden md:flex flex-nowrap justify-end">
            <div className="flex flex-grow"></div>
            <button onClick={changeLang()} className="mr-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={localeFlags[localeFlag].name}
                src={localeFlags[localeFlag].img}
              />
            </button>
            <Button link={t("linkEshopGeneral")} inverse={false} blank>
              {t("buttonEshop")} &raquo;
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
