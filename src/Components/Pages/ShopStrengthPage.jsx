import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import strengthProducts from "../../data/strengthProducts";

function ShopStrengthPage() {
  return (
    <div className="uniform-container">
      {/* This will determine what message, stripe link, and footer each shop card will have */}
      {strengthProducts.map((product) => {
        // Define Stripe URL Link based on product name
        let stripeLink = "";
        let message = "";
        let footer = "";
        if (product.name === "The Rookie Lift") {
          stripeLink = "https://buy.stripe.com/4gMeVc38C3721A08lkfEk02";
          message =
            "A 4-Week, 2-Day Per Week Strength & Conditioning Program made for players new to the weight room. The Rookie Lift is your no-pressure introduction to proper training—focused on building foundational strength, movement quality, and confidence. Designed by ballplayers who’ve been in your cleats, it’s the perfect starting point for turning reps into results.";
            footer = "Not Available";
        } else if (product.name === "The Prospect Lift") {
          stripeLink = "https://buy.stripe.com/5kQfZg38CfTO3I8eJIfEk01";
          message =
            "A 4-Week, 3-Day Per Week Strength & Conditioning Program designed for players who’ve gotten a taste of training—and are hungry for more. The Prospect Lift bridges the gap between raw potential and refined performance. Built for ballplayers ready to level up their strength, speed, and explosiveness, this program takes what you’ve learned and pushes it to the next phase.";
            footer = "Not Available";
        } else if (product.name === "The Veteran Lift") {
          stripeLink = "https://buy.stripe.com/14k8wx5IifMidRSbII";
          message =
            "A 4-Week, 4-Day Per Week Strength & Conditioning Program built by ballplayers, for ballplayers. This one’s for the grinders. The dirtbags. The seasoned vets who know that baseball strength doesn’t just come from swings and throws—it’s built in the weight room.";
            footer = "Available Now"
        }

        return (
          <div key={product.id} className="shop-card">
            <Card className="text-center uniform-card">
              <Card.Header style={{ fontWeight: "bold" }}>
                {product.name}
              </Card.Header>
              <Card.Img className="shop-card-img" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{message}</Card.Text>
                <Card.Text>${(product.price / 100).toFixed(2)}</Card.Text>
                <Link to={stripeLink} target="_blank">
                  <button disabled={product.name === "The Rookie Lift" || product.name === "The Prospect Lift"} className="uniform-btn">Buy Me</button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">{footer}</Card.Footer>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ShopStrengthPage;
