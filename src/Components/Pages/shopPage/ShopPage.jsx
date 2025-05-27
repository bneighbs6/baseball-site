import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./shopPage.css"

function ShopPage() {
    return (
      <div className="uniform-container">
        <div className="shop-card">
          <Card className="text-center uniform-card">
            <Card.Header style={{fontWeight: "bold"}}>Diamond Dev Apparel</Card.Header>
            <Card.Img
              className="shop-card-img"
              src="../media/DiamondDevTransparent.png"
            />
            <Card.Body>
              <Card.Title>Shop Our New Styles Now</Card.Title>
              <Card.Text className="description">
                Discover the perfect blend of style and comfort with our
                exclusive Diamond Dev Apparel collection! Each piece is designed
                with high-quality materials to ensure you look great while
                feeling even better. Whether you're hitting the gym, running
                errands, or just lounging at home, our apparel is tailored to
                fit your lifestyle. Don't miss out on our latest styles and
                limited-time offers—shop now and elevate your wardrobe!
              </Card.Text>
              <Link
                to="https://diamond-dev-apparel.printify.me/"
                target="_blank"
              >
                <button className="uniform-btn">
                  Diamond Dev Apparel Shop
                </button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Shop Now</Card.Footer>
          </Card>
        </div>
        <div className="shop-card">
          <Card className="text-center uniform-card">
            <Card.Header style={{fontWeight: "bold"}}>Strength & Conditioning</Card.Header>
            <Card.Img
              className="shop-card-img"
              src="../media/DiamondDevTransparent.png"
            />
            <Card.Body>
              <Card.Title>Certified Strength & Conditioning Specialist (CSCS) Tested & Proven Programs</Card.Title>
              <Card.Text className="description">
              Get ready to elevate your game with our CSCS Tested & Proven
                Baseball Strength Programs! Designed by experts, these programs
                focus on building strength, speed, and agility to help you
                perform at your best on the field. VETERAN LIFT AVAILABLE NOW.
                Stay tuned for the release of TWO NEW programs soon!
              </Card.Text>
              <Link to="/strength-programs"> {/* Replace with live website "/strength-programs" */}
                <button className="uniform-btn">
                  Baseball Strength Programs
                </button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Shop Now</Card.Footer>
          </Card>
        </div>
      </div>
    );
}

export default ShopPage;