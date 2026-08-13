import "./Contacts.scss";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Slide } from "react-awesome-reveal";
import { isMobile } from "../../utils";
import { validateField, validateContactForm } from "./validation";
import { sendTelegramMessage } from "./telegram";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const Contacts = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (submitStatus.message) {
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateContactForm(formData);

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setSubmitStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendTelegramMessage(formData);
      setFormData(initialFormState);
      setErrors({});
      setSubmitStatus({ type: "success", message: "Your message was sent successfully." });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong while sending the message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contacts" className="Contacts">
      <Slide
        fraction={0.5}
        duration={1000}
        direction={isMobile() ? `left` : "up"}
        triggerOnce
      >
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
                <p>
                  Whether it's a full-time role, contract, or an
                  interesting{" "}
                </p>
                <p>project — I'd love to hear from you</p>
              </span>

              <div className="Contacts__content_left-contacts">
                <div className="Contacts__content_left-contact">
                  <div className="Contacts__content_left-label text-grey text-medium">
                    Mail
                  </div>
                  <a
                    href="mailto:info@erbol.dev"
                    className="Contacts__content_left-item text-white"
                  >
                    info@erbol.dev
                  </a>
                </div>
                <div className="Contacts__content_left-contact">
                  <div className="Contacts__content_left-label text-grey text-medium">
                    Linkedin
                  </div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/erbollldev/"
                    className="Contacts__content_left-item text-white"
                  >
                    linkedin.com/in/erbollldev
                  </a>
                </div>
              </div>
            </div>

            <div className="Contacts__content_right">
              <form className="Contacts__content_right-form" onSubmit={handleSubmit} noValidate>
                <h3 className="Contacts__content_right-form-title heading-3 text-white">
                  Tell me about your project
                </h3>

                <label className="Contacts__content_right-label">
                  <span className="text-grey">Your name</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <small className="text-error">{errors.name}</small>}
                </label>

                <label className="Contacts__content_right-label">
                  <span className="text-grey">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small className="text-error">{errors.email}</small>}
                </label>

                <label className="Contacts__content_right-label">
                  <span className="text-grey">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <small className="text-error">{errors.message}</small>}
                </label>

                {submitStatus.message && (
                  <p className={submitStatus.type === "error" ? "text-error" : "text-success"}>
                    {submitStatus.message}
                  </p>
                )}

                <Button
                  text={isSubmitting ? "Sending..." : "Send message"}
                  buttonType="submit"
                  disabled={isSubmitting}
                />
              </form>
            </div>
          </div>

          <p className="Contacts__content_rights text-grey text-medium">
            © {new Date().getFullYear()} Erbol Nurekov. All rights reserved
          </p>
        </div>
      </Slide>
    </section>
  );
};
export default Contacts;
