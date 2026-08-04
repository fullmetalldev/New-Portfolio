import "./Skill.scss";
import { Fade } from "react-awesome-reveal";

const Skill = ({ text, icon }) => {
  const renderIcon = () => {
    if (!icon) {
      return <div className="Dot" />;
    }
    return icon();
  };

  return (
    <Fade cascade  fraction={1} triggerOnce>
      <button className="Skill">
        {renderIcon()}
        <span>{text}</span>
      </button>
    </Fade>
  );
};

export default Skill;
