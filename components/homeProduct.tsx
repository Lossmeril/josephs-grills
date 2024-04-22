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

interface PropBoxProps {
  name: string;
  children: React.ReactNode;
}

const PropBox: React.FC<PropBoxProps> = ({ name, children }) => {
  return (
    <div className="flex flex-col flex-nowrap w-1/3 justify-between items-center">
      <div className="border border-[#dedede] rounded-full w-full aspect-square flex justify-center items-center mb-5 text-orange">
        {children}
      </div>
      <h3 className="text-center font-bold leading-none text-mutedtext-dark">
        {name}
      </h3>
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

  prop1: string;
  prop1Icon: React.ReactNode;

  prop2: string;
  prop2Icon: React.ReactNode;

  prop3: string;
  prop3Icon: React.ReactNode;

  leftRef: MutableRefObject<null>;
  rightRef: MutableRefObject<null>;

  children: string | JSX.Element | JSX.Element[];
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
  prop1,
  prop1Icon,
  prop2,
  prop2Icon,
  prop3,
  prop3Icon,
  leftRef,
  rightRef,
  children,
}) => {
  return (
    <div className="min-h-screen bg-white border-t border-[#ededed] section-3 relative flex flex-col justify-center items-center ">
      <div className="flex flex-col flex-nowrap justify-start">
        <div className="flex flex-row flex-nowrap items-center w-[1340px] h-[70vh]">
          {/* PRVNÍ SLOUPEC */}
          <div
            className="flex flex-col flex-nowrap w-1/3 h-full items-start py-20 opacity-0"
            ref={leftRef}
          >
            <p className="text-2xl mb-6">{tagline}</p>
            <h2
              className={
                "text-6xl font-bold leading-[1.25em] mb-12 -mt-6 uppercase " +
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
          <div className="relative w-1/3 h-full z-30 flex flex-col justify-end overflow-visible">
            <Image
              src={"/img/products/" + image}
              alt=""
              width={450}
              height={450}
              className="z-30 w-[450px] h-[450px]"
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
            <p className="text-md text-mutedtext-dark leading-relaxed mb-6">
              {children}
            </p>
            <div className="flex flex-row flex-nowrap justify-center gap-6 mt-10">
              <PropBox name={prop1}>{prop1Icon}</PropBox>
              <PropBox name={prop2}>{prop2Icon}</PropBox>
              <PropBox name={prop3}>{prop3Icon}</PropBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
