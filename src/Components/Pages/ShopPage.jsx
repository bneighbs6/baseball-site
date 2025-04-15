import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faPersonDigging,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function ShopPage() {
  return (
    <div className="shop-page">
      <FontAwesomeIcon
        icon={faPersonDigging}
        className="construction-icon fa-flip"
        style={{ "--fa-animation-duration": "3s" }}
      />
      <FontAwesomeIcon
        icon={faHelmetSafety}
        className="construction-icon fa-bounce"
        style={{ "--fa-animation-duration": "3s" }}
      />
      <FontAwesomeIcon
        icon={faWrench}
        className="construction-icon fa-beat"
        style={{ "--fa-animation-duration": "3s" }}
      />
      <h5>Shop Page Under Construction</h5>
    </div>
  );
}

export default ShopPage;
