import Button from "../Button/Button";
import Skill from "../Skill/Skill";
import "./ProjectCard.scss";
import Sample from "./sample.png";

const ProjectCard = ({ data, idx }) => {
  return (
    <div className="ProjectCard">
      <span className="ProjectCard__id text-red">0{idx + 1}</span>
      <h3 className="ProjectCard__title">{data?.title}</h3>
      <div className="ProjectCard__content">
        <div className="ProjectCard__content_left">
          <div className="ProjectCard__content_skills">
            {data?.tech?.map((skill) => (
              <Skill text={skill} />
            ))}
          </div>

          <span className="ProjectCard__content_description text-grey text-small">
            {data?.description}
          </span>
        </div>

        <div className="ProjectCard__content_image">
          <img src={data?.img} />
        </div>
      </div>
      <Button
        action={() => window.open(data?.link)}
        outlined
        type="secondary"
        text="See my work"
      />
    </div>
  );
};
export default ProjectCard;
