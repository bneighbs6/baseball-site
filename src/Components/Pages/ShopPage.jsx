// ShopPage.jsx
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function ShopPage({ clientSecret }) {
  const stripe = useStripe(); // Initiate instance of useStripe() and assign to a variable
  const elements = useElements(); // Initialize instance of useElements() and assign to a variable
  const [message, setMessage] = useState(null); // set message to have an initial state of null
  const [isProcessing, setIsProcessing] = useState(false); // set isProcessing to have an initial state of false

  // handleSubmit will run once the user submits the form (<PaymentElement />)
  const handleSubmit = async (e) => {
    // Stop the form from performing its default submit behavior (page reload)
    e.preventDefault();

    // Prevent submission until Stripe and Elements are fully initialized
    if (!stripe || !elements) return;

    // Indicate that payment is currently being processed
    setIsProcessing(true);

    // Confirm the payment with the current Payment Element setup
    // This sends the payment details to Stripe and attempts to complete the payment
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements, // Pass in the Stripe Elements context that holds the user's payment info
      confirmParams: {
        // Where Stripe should redirect the user after authentication (e.g. 3D Secure)
        return_url: window.location.href, // This can also be a dedicated success page
      },
      redirect: "if_required", // Only redirect if extra authentication is needed (like 3D Secure)
    });

    if (error) {
      // If there was an error during payment confirmation, display the error message
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // If paymentIntent exists and its status is 'succeeded', show a success message
      setMessage("✅ Payment succeeded!");
    } else {
      // If paymentIntent exists but status is not 'succeeded', show a generic failure message
      setMessage("⚠️ Payment was not successful.");
    }

    // Stop the loading state after processing is done
    setIsProcessing(false);
  };

  // Returned to the user
  return (
    <div className="uniform-container">
      {/* Existing Shop Cards */}
      <div className="shop-card">
        <Card className="text-center uniform-card">
          <Card.Header style={{ fontWeight: "bold" }}>
            Diamond Dev Apparel
          </Card.Header>
          <Card.Img
            className="shop-card-img"
            src="../media/DiamondDevTransparent.png"
          />
          <Card.Body>
            <Card.Title>Shop Our New Styles Now</Card.Title>
            <Card.Text>
              Discover the perfect blend of style and comfort with our exclusive
              Diamond Dev Apparel collection!
            </Card.Text>
            <Link to="https://diamond-dev-apparel.printify.me/" target="_blank">
              <button className="uniform-btn">Diamond Dev Apparel Shop</button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">Shop Now</Card.Footer>
        </Card>
      </div>

      <div className="shop-card">
        <Card className="text-center uniform-card">
          <Card.Header style={{ fontWeight: "bold" }}>
            Strength & Conditioning
          </Card.Header>
          <Card.Img
            className="shop-card-img"
            src="../media/DiamondDevTransparent.png"
          />
          <Card.Body>
            <Card.Title>
              Certified Strength & Conditioning Specialist (CSCS) Tested &
              Proven Programs
            </Card.Title>
            <Card.Text>
              Get ready to elevate your game with our CSCS Tested & Proven
              Baseball Strength Program!
            </Card.Text>
            <Link to="https://diamonddevelopment.gumroad.com" target="_blank">
              <button disabled className="uniform-btn">
                Baseball Strength Program
              </button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">Shop Now</Card.Footer>
        </Card>
      </div>

      {/* Stripe Checkout Section */}
      <div className="shop-card">
        <Card className="text-center uniform-card">
          <Card.Header style={{ fontWeight: "bold" }}>
            Support Diamond Dev ($20 Test Payment)
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Want to support what we do? Make a test $20 donation below using
              Stripe's secure checkout.
            </Card.Text>

            {clientSecret ? (
              <form onSubmit={handleSubmit}>
                <PaymentElement />
                <button
                  type="submit"
                  disabled={!stripe || isProcessing}
                  className="uniform-btn mt-3"
                >
                  {isProcessing ? "Processing..." : "Pay $20"}
                </button>
                {message && <div className="mt-2">{message}</div>}
              </form>
            ) : (
              <p>Loading checkout form...</p>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ShopPage;
