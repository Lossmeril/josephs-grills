import Button from "@/components/button";
import { Unbounded } from "next/font/google";
import Image from "next/image";

const unbounded = Unbounded({ subsets: ["latin"] });

interface ProductProps {
  name: string;
  img: string;
  link: string;
  children: React.ReactNode;
}

const ProductCard: React.FC<ProductProps> = ({ name, img, link, children }) => {
  return (
    <div className="w-full md:w-2/5 xl:w-1/3 bg-[#ffffffa8] border border-mutedtext-light flex flex-col justify-between px-10 py-16">
      <div className="flex flex-col">
        <div className="h-28 lg:h-40 aspect-square relative mb-8">
          <Image
            src="/img/favicon.png"
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-sm text-mutedtext-dark mb-8">{children}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Button link={""} inverse={false}>
            Do e-shopu
          </Button>
          <Button link={""} inverse={true}>
            Dozvědět se více
          </Button>
        </div>
      </div>
    </div>
  );
};

const GrillsPage = () => {
  return (
    <>
      <main className="max-w-[1200px] overflow-x-hidden mx-auto">
        <section className="min-h-[800px] bg-white overflow-x-hidden flex flex-col flex-nowrap justify-center items-center text-center pt-40 hero">
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-16 -mt-4 " +
              unbounded.className
            }
          >
            Naše grily
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap gap-5 w-[80wv] xl:w-full mb-40 justify-center">
            <ProductCard name="John" img="" link="">
              Představujeme vám Johna, malý, ale mimořádně šikovný gril, který
              se stane vaším nezbytným společníkem na cestách.
            </ProductCard>
            <ProductCard name="Peter" img="" link="">
              Peter transformuje každý venkovní prostor na místo plné tepla a
              pohody.
            </ProductCard>
            <ProductCard name="Joseph" img="" link="">
              Joseph je výsledkem vrcholové řemeslné zručnosti a navržen je pro
              ty, kteří od svého grilu očekávají nekompromisní kvalitu a výkon.
            </ProductCard>
          </div>
        </section>
      </main>
    </>
  );
};

export default GrillsPage;
