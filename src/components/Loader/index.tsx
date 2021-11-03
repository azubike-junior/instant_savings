import React from "react";
import logo from "../../assets/images/new_logo.png";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__text">
        <img src={logo} alt="Loading..." />
      </div>
    </div>
  );
}
