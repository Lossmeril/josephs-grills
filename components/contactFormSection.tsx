const ContactFormSection: React.FC = () => {
  return (
    <section className="contact-form-section section-2 min-h-[120vh] relative flex flex-row justify-center items-center xl:px-40">
      <div className="hidden xl:block w-2/5"></div>
      <div className="bg-white xl:p-20 xl:pb-0 w-full xl:w-3/5 m-4 text-center">
        <h2 className="text-3xl mt-10 md:mt-0 mb-6 font-bold">
          Kontaktujte nás!
        </h2>
        <iframe
          className="w-full min-h-[90vh]"
          src="https://cms.josephsgrills.cz/kontaktni-formular/"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
