import "./Skill.scss";

const Skill = ({ text, icon }) => {
  return (
    <button className="Skill">
      {icon ? icon : <div className="Dot" />}
      <span>{text}</span>
    </button>
  );
};
export default Skill;
