// ShopPage.jsx
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

function ShopPage() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch client secret when component mounts
  useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2000, currency: "usd" }) // $20.00 USD
    })
      .then(res => res.json())
      .then(data => {
        setClientSecret(data.clientSecret);
      })
      .catch(err => {
        console.error("Error fetching clientSecret:", err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("✅ Payment succeeded!");
    } else {
      setMessage("⚠️ Payment was not successful.");
    }

    setIsProcessing(false);
  };

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
              Discover the perfect blend of style and comfort with our
              exclusive Diamond Dev Apparel collection!
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

