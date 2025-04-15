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
          <Card.Body>
            <Card.Title>Shop Our New Styles Now</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
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
          <Card.Body>
            <Card.Title>CSCS Tested & Proven Programs</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button className="shop-strength-training-btn">
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
