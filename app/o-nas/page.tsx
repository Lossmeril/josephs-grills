import ContactFormSection from "@/components/contactFormSection";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <main className="max-w-[1200px] overflow-x-hidden mx-auto">
        <section className="min-h-[800px] bg-white overflow-x-hidden flex flex-col flex-nowrap justify-center items-center text-center pt-20">
          <h1 className="text-6xl font-bold leading-[1.25em] mb-8 -mt-4 ">
            O nás
          </h1>
          <p className="text-3xl font-bold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </section>
        <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-row flex-nowrap justify-center items-center gap-40 text-center border-t border-[#ededed]">
          <div className="w-full flex flex-col">
            <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4">
              Náš příběh
            </h2>
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="w-full h-[500px] relative">
            <Image
              src="/img/products/placeholder1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-row flex-nowrap justify-center items-center gap-40 text-center border-t border-[#ededed]">
          <div className="w-full h-[500px] relative">
            <Image
              src="/img/products/placeholder1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4">
              Náš příběh
            </h2>
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
        </section>
      </main>
      <ContactFormSection />
    </>
  );
};

export default AboutPage;
