import { isMobile } from "../../utils";
import "./work.scss";
import WorkAccordion from "./WorkAccordion/WorkAccordion";
import { Slide } from "react-awesome-reveal";

const Work = () => {
  return (
    <section id="Experience" className="Work">
      <Slide fraction={isMobile() ? 0.1 : 0.5} duration={1000} direction={isMobile() ? `left` : 'up'} triggerOnce>
        <div className="container">
          <div className="Work__content">
            <div className="Work__content_left">
              <h4 className="Work__content_subtitle section-subtitle text-medium font-normal">
                Experience
              </h4>
              <h2 className="Work__content_title heading-1 font-normal text-white">
                <p>Work</p>
                <p>Experience</p>
              </h2>
              <span className="Work__content_description text-grey">
                Over the past few years, I’ve contributed to a range of digital
                products, from enterprise platforms to startup applications. My
                focus has always been on building clean, maintainable, and
                high-performance interfaces that deliver a great user
                experience.
              </span>
            </div>

            <div className="Work__content_right">
              <WorkAccordion />
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};
export default Work;
