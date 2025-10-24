import "./ModernButton.css";

const ModernButton = ({ text, onClick, type = "button" }) => {
  return (
    <button className="modern-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ModernButton;
