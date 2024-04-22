const ContactFormSection: React.FC = () => {
  return (
    <section className="contact-form-section min-h-[80vh] section-2 relative flex flex-row justify-center items-center px-40">
      <div className="w-1/2"></div>
      <div className="bg-white p-20 w-1/2 text-center">
        <h2 className="text-3xl mb-6 font-bold">Kontaktujte nás!</h2>
        <iframe
          className="w-full h-[500px]"
          src="http://cms.josephsgrills.cz/kontaktni-formular/"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
