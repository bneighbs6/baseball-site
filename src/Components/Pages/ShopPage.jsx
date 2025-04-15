import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function ShopPage() {
    return (
      <div className="shop-page">
        <FontAwesomeIcon icon={faHelmetSafety} className="construction-icon" />
        <FontAwesomeIcon icon={faPersonDigging} className="construction-icon" />
        <p>Shop Page Under Construction.</p>
      </div>
    );
}

export default ShopPage;