import { globalLinks } from "@/data/links";
import { Inter } from "next/font/google";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

const Footer: React.FC = () => {
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
            <h3 className="text-lg font-bold mb-3">Naše grily</h3>
            <ul>
              <li>
                <a className="link" href="/grily/john">
                  John
                </a>
              </li>
              <li>
                <a className="link" href="/grily/john">
                  Peter
                </a>
              </li>
              <li>
                <a className="link" href="/grily/john">
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
            <h3 className="text-lg font-bold mb-3">Další stránky</h3>
            <ul>
              <li>
                <a className="link" href="/o-nas">
                  O nás
                </a>
              </li>
              <li>
                <a className="link" href="">
                  E-shop
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={globalLinks.termsAndConditions.cs}
                  target="_blank"
                >
                  Obchodní podmínky
                </a>
              </li>
              <li>
                <a className="link" href={globalLinks.GDPR.cs} target="_blank">
                  Ochrana osobních údajů a GDPR
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={globalLinks.certification.cs}
                  target="_blank"
                >
                  Certifikace kovu
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-3">Kontakt</h3>
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
                Česká Republika
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white shadow-sm z-50 border-t border-mutedtext-light">
        <div className="h-20 flex flex-nowrap justify-center items-center mx-[5vw] lg:mx-[10vw]">
          Vytvořilo AURORA studio, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
