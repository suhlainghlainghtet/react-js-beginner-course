import React from "react";
import ReactDOM from "react-dom";
export default function PortalsDemo() {
  return ReactDOM.createPortal(
    <h2>Portals Demo...</h2>,
    document.getElementById("portal-root")
  );
}
