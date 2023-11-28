import React from "react";
import "../Style.css";
export default function StyleSheets({ isPrimary }) {
  let className = isPrimary ? "primary" : "";
  return (
    <div>
      <h3 className={`${className} fz`}>StyleSheets</h3>
    </div>
  );
}
