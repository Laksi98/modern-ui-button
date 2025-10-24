import ModernButton from "modern-ui-button";

function App() {
  const handleClick = () => alert("Button clicked!");

  return (
    <div style={{ padding: "50px" }}>
      <h1>My Vite React App</h1>
      <ModernButton text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
