import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            as={Link}
            to="header" // Brings user to the top of the webpage if clicked
            smooth={true}
            duration={1000}
          >
            <button className="nav-btn">Home</button>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="meetTheCoach"
            smooth={true}
            duration={1000}
          >
            <button className="nav-btn">Meet The Coach</button>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="calendly"
            smooth={true}
            duration={1000}
          >
            <button className="nav-btn">Schedule a Lesson</button>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="contact"
            smooth={true}
            duration={1000}
          >
            <button className="nav-btn">Contact Us</button>
          </Nav.Link>
          <Nav.Link
            href="https://diamond-dev-apparel.printify.me/"
            target="_blank"
          >
            <button className="nav-btn">Shop</button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;