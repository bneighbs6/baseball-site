import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
      <footer>
        <div className="footer">
          <a href="mailto:brett.diamonddevelopment@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelopeSolid}
              className="fa-solid email-icon"
            />
          </a>
          <p>Connect With Us</p>
        </div>
      </footer>
    );
}

export default Footer;