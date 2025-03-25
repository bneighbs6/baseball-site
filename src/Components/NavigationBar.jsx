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
            to="logo" // Brings user to the top of the webpage if clicked
            smooth={true}
            duration={500}
            className="nav-link"
            style={{ color: "white", textAlign: "center", backgroundColor: "#003f85", padding: "10px 20px", margin: "5px", borderRadius: "5px", textDecoration: "none" }}
          >
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="services"
            smooth={true}
            duration={500}
            style={{ color: "white", textAlign: "center", backgroundColor: "#003f85", padding: "10px 20px", margin: "5px", borderRadius: "5px", textDecoration: "none" }}          >
            Services
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="about"
            smooth={true}
            duration={500}
            style={{ color: "white", textAlign: "center", backgroundColor: "#003f85", padding: "10px 20px", margin: "5px", borderRadius: "5px", textDecoration: "none" }}          >
            About
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="schedule-form"
            smooth={true}
            duration={500}
            style={{ color: "white", textAlign: "center", backgroundColor: "#003f85", padding: "10px 20px", margin: "5px", borderRadius: "5px", textDecoration: "none" }}          >
            Schedule a Lesson
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;