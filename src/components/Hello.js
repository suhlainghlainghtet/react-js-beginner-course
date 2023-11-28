// Differences between Html and JSX
import React from "react";
const Hello = (props) => {
  return (
    <div>
      <h3>
        Name: {props.name}, Age: {props.age}
      </h3>
      {props.children}
    </div>
  );
  //   return React.createElement(
  //     "div",
  //     { id: "hello", className: "greet" },
  //     React.createElement("h3", null, "Differences between html and JSX")
  //   );
};
export default Hello;
