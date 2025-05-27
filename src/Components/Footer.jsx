import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeSolid  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

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
          <a href="https://www.facebook.com/profile.php?id=61576008284448" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook facebook-icon" />
          </a>
          <p>Connect With Us</p>
        </div>
      </footer>
    );
}

export default Footer;