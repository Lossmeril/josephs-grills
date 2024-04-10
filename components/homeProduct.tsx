import Image from "next/image";
import Button from "./button";

import { Unbounded } from "next/font/google";
import { MutableRefObject } from "react";

const unbounded = Unbounded({ subsets: ["latin"] });

interface InfoBoxProps {
  value: string;
  unit: string;
  property: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, unit, property }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center border border-[#dedede] border-solid p-5 w-24 aspect-square">
      <p className="text-3xl font-bold -mb-2">{value}</p>
      <p className="text-lg font-bold mb-1">{unit}</p>
      <p className="text-xs uppercase">{property}</p>
    </div>
  );
};

interface HomeProductProps {
  name: string;
  tagline: string;
  weight: string;
  height: string;
  length: string;

  pageLink: string;
  eshopLink: string;

  image: string;

  leftRef: MutableRefObject<null>;
  rightRef: MutableRefObject<null>;
}

const HomeProduct: React.FC<HomeProductProps> = ({
  name,
  tagline,
  weight,
  height,
  length,
  pageLink,
  eshopLink,
  image,
  leftRef,
  rightRef,
}) => {
  return (
    <div className="min-h-screen bg-white border-t border-[#ededed] section-3 relative flex flex-col justify-center items-center ">
      <div className="flex flex-col flex-nowrap justify-start">
        <div className="flex flex-row flex-nowrap items-center max-w-[1340px] h-[70vh]">
          {/* PRVNÍ SLOUPEC */}
          <div
            className="flex flex-col flex-nowrap w-1/3 h-full items-start py-20 opacity-0"
            ref={leftRef}
          >
            <p className="text-2xl mb-6">{tagline}</p>
            <h2
              className={
                "text-6xl font-bold leading-[1.25em] mb-12 -mt-6 " +
                unbounded.className
              }
            >
              {name}
            </h2>
            <div className="flex flex-row flex-nowrap gap-5">
              <InfoBox value={weight} unit="kg" property="hmotnost" />
              <InfoBox value={height} unit="cm" property="výška" />
              <InfoBox value={length} unit="cm" property="šířka/délka" />
            </div>

            <div className="flex flex-row flex-nowrap gap-5 mt-10">
              <Button link={pageLink} inverse={false}>
                Více informací &raquo;
              </Button>
              <Button link={eshopLink} inverse={true}>
                Do e-shopu &raquo;
              </Button>
            </div>
          </div>

          {/* DRUHÝ SLOUPEC */}
          <div className="relative w-1/3 h-full z-30 flex flex-col justify-end">
            <Image
              src={"/img/products/" + image}
              alt=""
              width={500}
              height={500}
              className="object-cover overflow-visible z-30"
            />
          </div>

          {/* TŘETÍ SLOUPEC */}
          <div
            className="flex flex-col flex-nowrap w-1/3 pl-40 opacity-0"
            ref={rightRef}
          >
            <h3 className="text-2xl font-bold leading-[1.25em] mb-6">
              Popisek
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
