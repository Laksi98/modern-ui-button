import "./ModernButton.css";

const ModernButton = ({ text, onClick }) => {
  return (
    <button className="modern-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ModernButton;
