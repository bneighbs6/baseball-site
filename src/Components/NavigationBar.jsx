import Container from "react-bootstrap/Container";
import { Dropdown, Navbar, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function NavigationBar() {
  // Define breakpoints for mobile and desktop
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Navbar className="navbar">
      <Container className="nav-container">
        {isMobile ? (
          // Mobile Navigation
          <Dropdown>
            <Dropdown.Toggle variant="light">Menu</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/meet">Meet the Coach</Dropdown.Item>
              <Dropdown.Item href="/schedule">Schedule a Lesson</Dropdown.Item>
              <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
              <Dropdown.Item href="/shop">Shop</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          // Desktop Navigation
          <Navbar expand="md" variant="light">
            <Container>
              <Nav className="mx-auto">
                <Nav.Link href="/">
                  <button className="uniform-btn-nav">Home</button>
                </Nav.Link>
                <Nav.Link href="/meet">
                  <button className="uniform-btn-nav">Meet The Coach</button>
                </Nav.Link>
                <Nav.Link href="/schedule">
                  <button className="uniform-btn-nav">Schedule a Lesson</button>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <button className="uniform-btn-nav">Contact Us</button>
                </Nav.Link>
                <Nav.Link href="/shop">
                  <button className="uniform-btn-nav">Shop</button>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;