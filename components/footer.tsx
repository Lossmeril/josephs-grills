import { Inter } from "next/font/google";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full py-10 md:py-0 bg-white shadow-sm z-50 border-t border-mutedtext-light">
        <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] h-full mx-[5vw] lg:mx-[10vw] gap-x-5 items-start pt-12 pb-6">
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
                <a className="link" href="">
                  Obchodní podmínky
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center mb-8">
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
          </div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold mb-3">Kontakt</h3>
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
              <li>
                Adresa 1<br />
                123 45 Štíty
                <br />
                Česká Republika
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3">
              Joseph&apos;s grills, s.r.o.
            </h3>
            <ul className="mb-6">
              <li>IČO: 1111111111</li>
              <li>DIČ: CZ1111111111</li>
            </ul>
            <div className="relative w-40 h-10 mx-auto ">
              <Image
                src="/img/logo-simple-black.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
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
