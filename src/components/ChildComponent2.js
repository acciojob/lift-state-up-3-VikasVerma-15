import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div style={{ backgroundColor: "gold", padding: "10px", margin: "10px 0" }}>
      <h3>Child Component 2</h3>
      <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
