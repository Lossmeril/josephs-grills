import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full h-auto md:h-60 pb-5 pt-10 md:py-0 bg-white shadow-sm z-50 border-t border-[#ededed]">
        <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] h-full mx-[5vw] lg:mx-[10vw] gap-x-5 items-center">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold mb-3">Další stránky</h4>
            <ul>
              <li>O nás</li>
              <li>E-shop</li>
              <li>Obchodní podmínky</li>
            </ul>
          </div>
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold mb-3">Naše grily</h4>
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
          <div className="text-center">
            <div className="relative w-40 h-10 mx-auto mb-6">
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
      <div className="w-full h-20 bg-white shadow-sm z-50 border-t border-[#ededed]">
        <div className="h-20 flex flex-nowrap justify-center items-center mx-[5vw] lg:mx-[10vw]">
          Vytvořilo AURORA studio, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
