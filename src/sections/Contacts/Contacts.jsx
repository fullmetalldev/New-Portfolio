import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="Contacts">
      <div className="container">
        <div className="Contacts__content">
          <div className="Contacts__content_left">
            <h4 className="Contacts__content_left-subtitle section-subtitle text-medium font-normal">
              Contacts
            </h4>
            <h2 className="Contacts__content_left-title heading-1 font-normal text-white">
              <p>Open to new work</p>
            </h2>

            <span className="Contacts__content_left-description text-medium text-grey">
              Whether it's a full-time role, contract, or an interesting project
              — I'd love to hear from you
            </span>

            <div className="Contacts__content_left-contacts">
              <div className="Contacts__content_left-contact">
                <div className="Contacts__content_left-label text-grey text-medium">
                  Mail
                </div>
                <span className="Contacts__content_left-item text-white">
                  info@erbol.dev
                </span>
              </div>
              <div className="Contacts__content_left-contact">
                <div className="Contacts__content_left-label text-grey text-medium">
                  Linkedin
                </div>
                <span className="Contacts__content_left-item text-white">
                  linkedin.com/in/erbollldev
                </span>
              </div>
            </div>
          </div>

          <div className="Contacts__content_right">

          </div>

         
        </div>

         <p className="Contacts__content_rights text-grey text-medium">
            © {new Date().getFullYear()} Erbol Nurekov. All rights reserved
          </p>
      </div>
    </section>
  );
};
export default Contacts;
