import React from "react";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

function ShopPage() {
    return (
      <div className="shop-page">
        <div className="App">
          <div id="header">
            <Header />
          </div>
          <div id="navbar">
            <NavigationBar />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default ShopPage;