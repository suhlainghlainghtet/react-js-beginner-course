import React from "react";

export default function ChildComponent({ handlerClick }) {
  return (
    <div>
      <button onClick={() => handlerClick("child")}>Click</button>
    </div>
  );
}
