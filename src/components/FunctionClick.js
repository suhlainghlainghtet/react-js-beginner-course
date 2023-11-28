import React from "react";

export default function FunctionClick() {
  const handleClick = () => {
    console.log("Button clicked.");
  };
  return (
    <div>
      <button onClick={handleClick}>function click</button>
    </div>
  );
}
