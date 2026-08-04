import Skill from "../../components/Skill/Skill";
import "./TechStack.scss";
import Technologies from "./techs";
import { Slide } from "react-awesome-reveal";

const TechStack = () => {
  return (
    <section className="TechStack">
      <Slide fraction={0.5} duration={1000} direction="up" triggerOnce>
        <div className="container">
          <div className="TechStack__content">
            <h4 className="TechStack__content_subtitle section-subtitle text-medium font-normal">
              Skills
            </h4>
            <h2 className="heading-1 font-normal">Technical stack</h2>
            <div className="TechStack__content_technologies">
              {Technologies?.map((techParent, parentIndex) => (
                <div
                  className="TechStack__content_technologies-block"
                  key={techParent.category || parentIndex}
                >
                  <Slide
                    fraction={0.5}
                    duration={1000}
                    direction="up"
                    triggerOnce
                  >
                    <h3 className="heading-2 font-normal">
                      {techParent?.category}
                    </h3>

                    <div className="TechStack__content_technologies-block-skills">
                      {techParent?.list?.map((skill, idx) => (
                        <Skill
                          key={`${skill.name}-${idx}`}
                          text={skill.name}
                          icon={skill.icon}
                        />
                      ))}
                    </div>
                  </Slide>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default TechStack;
