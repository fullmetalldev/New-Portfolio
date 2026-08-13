import "./button.scss";

const Button = ({ text, action, type, cls, outlined, buttonType = "button", disabled = false }) => {
  const buttonClass = () => {
    switch (type) {
      case "secondary":
        return "secondaryBtn";
      default:
        return "primaryBtn";
    }
  };

  return (
    <button
      type={buttonType}
      onClick={action}
      className={`button ${buttonClass()} ${cls ? cls : ""}${outlined ? "outlined" : ""}`}
      disabled={disabled}
    >
      {text}
      {action ? (
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3335 1L13.8335 6.5L8.3335 12M13.8335 6.5L1.00016 6.5"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};
export default Button;
