import { MdPhone } from "react-icons/md";

const ContactPage = () => {
  return (
    <main className="max-w-[1200px] overflow-x-hidden mx-auto">
      <section className="min-h-screen bg-white overflow-x-hidden p-20 flex flex-col justify-center items-center">
        <div className="w-3/5 text-center">
          <h1 className="text-6xl font-bold leading-[1.25em] mb-8 -mt-4 ">
            Kontaktujte nás!
          </h1>
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="flex flex-row flex-nowrap w-full">
          <div className="w-1/2 bg-red p-10">
            <div className="flex flex-row flex-nowrap justify-between">
              <MdPhone size={25} />
              <p className="text-lg text-right">+420 123 456 789</p>
            </div>
            <div className="flex flex-row flex-nowrap justify-between">
              <MdPhone size={25} />
              <p className="text-lg text-right">info@josephs-grills.cz</p>
            </div>
            <div className="flex flex-row flex-nowrap justify-between">
              <MdPhone size={25} />
              <p className="text-lg text-right">
                Adresa 1<br />
                123 45 Štíty
                <br />
                Česká Republika
              </p>
            </div>
          </div>
          <div className="w-1/2 bg-orange"></div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
