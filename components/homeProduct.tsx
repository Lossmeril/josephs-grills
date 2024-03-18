import Image from "next/image";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

interface InfoBoxProps {
  value: string;
  unit: string;
  property: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, unit, property }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center border border-[#dedede] border-solid p-2 w-24 aspect-square">
      <p className="text-3xl font-bold -mb-2">{value}</p>
      <p className="text-lg font-bold mb-1">{unit}</p>
      <p className="text-xs uppercase">{property}</p>
    </div>
  );
};

interface HomeProductProps {
  name: string;
  tagline: string;
}

const HomeProduct: React.FC<HomeProductProps> = ({ name, tagline }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-start">
      <div className="flex flex-row flex-nowrap items-center max-w-[1340px] h-[70vh]">
        {/* PRVNÍ SLOUPEC */}
        <div className="flex flex-col flex-nowrap w-1/3 h-full items-start py-20">
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
            <InfoBox value="50" unit="kg" property="hmotnost" />
            <InfoBox value="30" unit="cm" property="výška" />
            <InfoBox value="50" unit="kg" property="hmotnost" />
          </div>
        </div>

        {/* DRUHÝ SLOUPEC */}
        <div className="relative w-1/3 h-full">
          <Image
            src="/img/products/placeholder.png"
            alt=""
            fill
            className="object-cover overflow-visible"
          />
        </div>

        {/* TŘETÍ SLOUPEC */}
        <div className="flex flex-col flex-nowrap w-1/3 pl-40">
          <h3 className="text-2xl font-bold leading-[1.25em] mb-6">Popisek</h3>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
