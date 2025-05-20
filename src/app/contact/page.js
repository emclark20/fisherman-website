import ContactInfo from '../../components/ContactInfo';

export default function Contact() {
  return (
    <section className="section container">
      <h1 className="section-title">Contact Us</h1>
      <p className="contact-intro">
        Ready to book your fishing experience or have questions about our services? 
        Get in touch with us using the information below.
      </p>
      <ContactInfo />
    </section>
  );
}