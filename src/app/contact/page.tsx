import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactDetails from "./components/ContactDetails";
import ContactForms from "./components/ContactForms";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex px-[6.8em] w-full my-50 justify-between">
        <ContactDetails />
        <ContactForms />
      </div>
      <div className="bg-[#0B0C0E] px-[8.5em] py-[4em] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
