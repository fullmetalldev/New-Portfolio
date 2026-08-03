import "./Skill.scss";

const Skill = ({ text, icon }) => {
  const renderIcon = () => {
    if (!icon) {
      return <div className="Dot" />;
    }
    return icon();
  };

  return (
    <button className="Skill">
      {renderIcon()}
      <span>{text}</span>
    </button>
  );
};

export default Skill;
