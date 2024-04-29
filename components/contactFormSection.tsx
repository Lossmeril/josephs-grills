import { Inter, Unbounded } from "next/font/google";
import { MdEmail, MdPhone } from "react-icons/md";

const unbounded = Unbounded({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ContactFormSection: React.FC = () => {
  return (
    <section className="contact-form-section section-2 min-h-[120vh] relative flex flex-row justify-start items-center xl:px-40">
      <div className="hidden xl:block w-2/5"></div>
      <div className="bg-white p-4 xl:p-20 xl:pb-0 w-full xl:w-3/5 m-4 text-left">
        <div className="py-4 px-[10px] flex flex-col flex-nowrap gap-4 lg:py-10 lg:gap-16 lg:flex-row">
          <div className="flex flex-row flex-nowrap justify-start gap-5">
            <MdPhone size={28} />
            <p className="text-xl text-left">
              <a href="tel:'+420606727976'" className="link">
                +420 606 727 976
              </a>
            </p>
          </div>

          <div className="flex flex-row flex-nowrap justify-start gap-5">
            <MdEmail size={28} />
            <p className="text-xl text-left">
              <a href="mailto:'info@josephsgrills.cz'" className="link">
                info<span className={inter.className}>@</span>
                josephsgrills.cz
              </a>
            </p>
          </div>
        </div>

        <h2
          className={
            "text-3xl mt-10 md:mt-0 mb-6 font-bold text-left pl-[10px] " +
            unbounded.className
          }
        >
          Napište nám!
        </h2>
        <iframe
          title="Kontaktní formulář"
          className="w-full min-h-[100vh] lg:min-h-[80vh] overflow-visible"
          src="https://cms.josephsgrills.cz/kontaktni-formular/"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
