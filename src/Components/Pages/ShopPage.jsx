import React, { useState } from "react";
import { Card } from "react-bootstrap";

function ShopPage() {
  const [cart, setCart] = useState([]);
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState(null);

  const products = [
    {
      id: 1,
      name: "Diamond Dev T-Shirt",
      price: 2500, // $25.00
      image: "../media/DiamondDevTransparent.png",
    },
    {
      id: 2,
      name: "Strength Program",
      price: 4000,
      image: "../media/DiamondDevTransparent.png",
    },
  ];

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setCheckingOut(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong during checkout.");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err.message);
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <div className="uniform-container">
      {/* Product Cards */}
      {products.map((product) => (
        <div key={product.id} className="shop-card">
          <Card className="text-center uniform-card">
            <Card.Header style={{ fontWeight: "bold" }}>{product.name}</Card.Header>
            <Card.Img className="shop-card-img" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${(product.price / 100).toFixed(2)}</Card.Text>
              <button className="uniform-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </Card.Body>
            <Card.Footer className="text-muted">Available Now</Card.Footer>
          </Card>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="shop-card">
        <Card className="text-center uniform-card">
          <Card.Header style={{ fontWeight: "bold" }}>Your Cart</Card.Header>
          <Card.Body>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {cart.map((item) => (
                    <li key={item.id}>
                      {item.name} × {item.quantity} = $
                      {((item.price * item.quantity) / 100).toFixed(2)}
                      <button
                        style={{ marginLeft: 8 }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
                <h5>Total: ${(getTotal() / 100).toFixed(2)}</h5>
                <button
                  className="uniform-btn mt-2"
                  onClick={handleCheckout}
                  disabled={checkingOut}
                >
                  {checkingOut ? "Processing..." : "Checkout with Stripe"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ShopPage;
