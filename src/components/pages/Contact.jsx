import ContactForm from "./Contact Components/ContactForm";

function Contact() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's work together!
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
