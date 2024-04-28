import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

const ContactFormSection: React.FC = () => {
  return (
    <section className="contact-form-section section-2 min-h-[120vh] relative flex flex-row justify-start items-center xl:px-40">
      <div className="hidden xl:block w-2/5"></div>
      <div className="bg-white xl:p-20 xl:pb-0 w-full xl:w-3/5 m-4 text-left">
        <h2
          className={
            "text-3xl mt-10 md:mt-0 mb-6 font-bold text-left pl-[10px] " +
            unbounded.className
          }
        >
          Kontaktujte nás!
        </h2>
        <iframe
          className="w-full min-h-[80vh]"
          src="https://cms.josephsgrills.cz/kontaktni-formular/"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
