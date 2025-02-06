import CommunicationChannels from "./components/CommunicationChannels";
import Form from "./components/Form";

const ContactForm = () => {
  return (
    <div id="contact" className="py-20 sm:py-16 md:py-20 lg:py-32">
      <h2 className="uppercase text-slate-900 dark:text-slate-100 text-center title-mobile md:title-tablet md:text-left lg:title-desktop">
        Contáctanos
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-16 md:gap-28 lg:gap-5 mt-5 md:mt-10">
        <div className="w-full md:w-4/6 lg:w-3/6 space-y-5 md:space-y-10">
          <p className="text-slate-900 dark:text-slate-100 body-mobile text-left md:body-tablet lg:body-desktop">
            Nos comunicaremos contigo lo más pronto posible.
          </p>
          <CommunicationChannels />
        </div>
        <div className="w-full md:2/6 lg:w-3/6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
