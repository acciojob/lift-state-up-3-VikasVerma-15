import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div style={{ backgroundColor: "chocolate", padding: "10px", margin: "10px 0" }}>
      <h3>Child Component 1</h3>
      <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
