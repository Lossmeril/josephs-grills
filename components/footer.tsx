"use client";

import { Translation } from "@/data/types";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface FooterProps {
  langPack: Translation;
}

const Footer: React.FC<FooterProps> = ({ langPack }) => {
  return (
    <footer>
      <div className="w-full py-10 md:py-0 bg-white shadow-sm z-50 border-t border-mutedtext-light">
        <div className="grid grid-cols-[1fr] h-full mx-[5vw] gap-x-5 items-start pt-12 pb-6 lg:grid-cols-[1fr_1fr_1fr] lg:mx-[10vw] ">
          <div className="text-center mb-8">
            <div className="block relative w-48 h-10 mx-auto mb-12 lg:hidden ">
              <Image
                src="/img/logo-full-black.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-3">
              {langPack.footerGrillsHeading}
            </h3>
            <ul>
              <li>
                <a className="link" href={langPack.navbarGrillsURL + "john"}>
                  John
                </a>
              </li>
              <li>
                <a className="link" href={langPack.navbarGrillsURL + "peter"}>
                  Peter
                </a>
              </li>
              <li>
                <a className="link" href={langPack.navbarGrillsURL + "joseph"}>
                  Joseph
                </a>
              </li>
            </ul>
            <div className="hidden relative w-48 h-10 mx-auto mt-12 lg:block ">
              <Image
                src="/img/logo-full-black.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold mb-3">
              {langPack.footerPagesHeading}
            </h3>
            <ul>
              <li>
                <a className="link" href={langPack.navbarAboutURL}>
                  {langPack.footerAboutLink}
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={langPack.linkEshopGeneral}
                  target="_blank"
                >
                  {langPack.footerEshopLink}
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={langPack.linkTermsAndConditions}
                  target="_blank"
                >
                  {langPack.termsLink}
                </a>
              </li>
              <li>
                <a className="link" href={langPack.linkGDPR} target="_blank">
                  {langPack.GDPRLink}
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={langPack.linkCertification}
                  target="_blank"
                >
                  {langPack.certificationLink}
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-3">
              {langPack.footerContactHeading}
            </h3>
            <ul>
              <li>
                <a href="tel:'+420606727976'" className="link">
                  +420 606 727 976
                </a>
              </li>
            </ul>
            <ul>
              <li className="mb-4">
                <a href="mailto:'info@josephsgrills.cz'" className="link">
                  info<span className={inter.className}>@</span>
                  josephsgrills.cz
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3">Joseph&apos;s grills</h3>
            <ul className="mb-6">
              <li>IČO: 04143779</li>
              <li>DIČ: CZ04143779</li>
            </ul>
            <ul>
              <li>
                Na Pilníku 292,
                <br />
                789 91 Štíty
                <br />
                {langPack.czechRepublic}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white shadow-sm z-50 border-t border-mutedtext-light">
        <div className="h-20 flex flex-nowrap justify-center items-center mx-[5vw] lg:mx-[10vw]">
          {langPack.footerMadeBy} AURORA studio, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
