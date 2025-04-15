import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <div className="shop-apparel-card">
        <Card className="text-center">
          <Card.Header>Diamond Dev Apparel</Card.Header>
          <Card.Img className="shop-card-img" src="../media/Black.png"></Card.Img>
          <Card.Body>
            <Card.Title>Shop Our New Styles Now</Card.Title>
            <Card.Text>
              Discover the perfect blend of style and comfort with our exclusive
              Diamond Dev Apparel collection! Each piece is designed with
              high-quality materials to ensure you look great while feeling even
              better. Whether you're hitting the gym, running errands, or just
              lounging at home, our apparel is tailored to fit your lifestyle.
              Don't miss out on our latest styles and limited-time offers—shop
              now and elevate your wardrobe!
            </Card.Text>
            <Link to="https://diamond-dev-apparel.printify.me/" target="_blank">
              <Button className="shop-apparel-btn">
                Diamond Dev Apparel Shop
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">Shop Now</Card.Footer>
        </Card>
      </div>
      <div className="shop-strength-training-card">
        <Card className="text-center">
          <Card.Header>Strength</Card.Header>
          <Card.Img className="shop-card-img" src="../media/Transparent.png"></Card.Img>
          <Card.Body>
            <Card.Title>CSCS Tested & Proven Programs</Card.Title>
            <Card.Text>
              Get ready to elevate your game with our CSCS Tested & Proven
              Baseball Strength Program! Designed by experts, this program
              focuses on building strength, speed, and agility to help you
              perform at your best on the field. While this program is currently
              unavailable, stay tuned for its launch—your opportunity to
              transform your training is just around the corner! Sign up for
              updates and be the first to know when it becomes available!
            </Card.Text>
            <Button disabled className="shop-strength-training-btn">
              Baseball Strength Program
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">Shop Now</Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default ShopPage;
