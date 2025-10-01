import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "../../styles/NavBarStyle.css";

export const NavBarComponent = () => {
  return (
    <section className="nav-var-section">
        <div className="arrows">
      <FontAwesomeIcon icon={faBackward} />
      <FontAwesomeIcon icon={faForward} />
        </div>
    </section>
  );
};
