import "./About.scss";
import Skill from "../../components/Skill/Skill";
import Button from "../../components/Button/Button";
import Hero from "../../assets/hero.png";
import { Slide } from "react-awesome-reveal";
import { isMobile } from "../../utils";

const About = () => {
  const fields = ["Banking", "Healthcare", "Fintech"];

  return (
    <section className="About">
      <Slide fraction={isMobile() ? 0.1 : 0.5} duration={1000} direction={isMobile() ? `left` : 'up'} triggerOnce>
        <div className="container">
          <div className="About__content">
            <div className="About__content_left">
              <h1 className="About__content_left-heading heading-1 font-normal">
                Software Engineer
                <span className="text-grey"> & Developer</span>
              </h1>
              <div className="About__content_left-subHeading text-black2 text-medium">
                <p>Front-end specialist with 4+ years building</p>
                <p>high-performance web apps.</p>
              </div>
              <div className="About__content_left-fields">
                {fields?.map((field, idx) => (
                  <Skill key={idx} text={field} />
                ))}
              </div>
              <p className="About__content_left-slogan text-black2 text-medium">
                I build interfaces people love using.
              </p>

              <div className="About__content_left-actions">
                <Button action={() => null} text="Get in touch" />
                <Button
                  outlined
                  type={"secondary"}
                  action={() => null}
                  text="Portfolio"
                />
              </div>
            </div>
            <div className="About__content_right">
              <img src={Hero} className="About__content_right-img" />
              <div className="About__content_right-info">
                <div className="About__content_right-info-column">
                  <h3 className="heading-2 font-medium">4+</h3>
                  <p className="text-small">Years</p>
                  <p className="text-small">of experience</p>
                </div>

                <div className="About__content_right-info-column">
                  <h3 className="heading-2 font-medium">30+</h3>
                  <p className="text-small">Technologies</p>
                  <p className="text-small">mastered</p>
                </div>

                <div className="About__content_right-info-column">
                  <div>
                    <p className="text-small font-bold">San Fransicso</p>
                    <p className="text-small font-bold">Bay Area</p>
                  </div>
                  <p className="text-small ">Open to remote &</p>
                  <p className="text-small">Hybrid roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};
export default About;
