import Button from "../Button/Button";
import Skill from "../Skill/Skill";
import "./ProjectCard.scss";
import Sample from "./sample.png";

const ProjectCard = () => {
  return (
    <div className="ProjectCard">
      <span className="ProjectCard__id text-red">01 / Banking</span>
      <h3 className="ProjectCard__title">Auto Loan Platform</h3>
      <div className="ProjectCard__content">
        <div className="ProjectCard__content_skills">
          <Skill text="React" />
          <Skill text="Firebase" />
        </div>
        <div className="ProjectCard__content_image">
          <img src={Sample} />
        </div>
      </div>
      <Button action={()=> null} outlined type="secondary" text="See my work" />
    </div>
  );
};
export default ProjectCard;
