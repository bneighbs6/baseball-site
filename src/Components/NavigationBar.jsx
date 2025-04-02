import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light">
      <Container>
        <Nav className="mx-auto">
          {/* Need to style each nav link directly */}
          <Nav.Link
            as={Link}
            to="header" // Brings user to the top of the webpage if clicked
            smooth={true}
            duration={500}
            className="nav-link"
            style={{
              color: "#00e6e6",
              textAlign: "center",
              backgroundColor: "black",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Home
          </Nav.Link>
          {/* Need to style each nav link directly */}
          <Nav.Link
            as={Link}
            to="meetTheCoach"
            smooth={true}
            duration={500}
            style={{
              color: "#00e6e6",
              textAlign: "center",
              backgroundColor: "black",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Meet The Coach
          </Nav.Link>
          {/* Need to style each nav link directly */}
          <Nav.Link
            as={Link}
            to="schedule-form"
            smooth={true}
            duration={500}
            style={{
              color: "#00e6e6",
              textAlign: "center",
              backgroundColor: "black",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Schedule a Lesson
          </Nav.Link>
          {/* Need to style each nav link directly */}
          <Nav.Link
            as={Link}
            to="services"
            smooth={true}
            duration={500}
            style={{
              color: "#00e6e6",
              textAlign: "center",
              backgroundColor: "black",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Services
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;