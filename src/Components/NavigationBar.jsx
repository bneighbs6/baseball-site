import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link href="/">
            <button className="nav-btn">Home</button>
          </Nav.Link>
          <Nav.Link href="/meet">
            <button className="nav-btn">Meet The Coach</button>
          </Nav.Link>
          <Nav.Link href="/schedule">
            <button className="nav-btn">Schedule a Lesson</button>
          </Nav.Link>
          <Nav.Link href="/contact">
            <button className="nav-btn">Contact Us</button>
          </Nav.Link>
          <Nav.Link href="/shop">
            <button className="nav-btn">Shop</button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;