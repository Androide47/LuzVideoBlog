import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: "#E8E1F5" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color: "#94AD61" }}>
          <img
            src="logos/Logo.png"
            height="40"
            className="d-inline-block align-top"
            alt="Logo Luz"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Blog" style={{ color: "#94AD61" }}>
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              as={Link}
              to="/signin"
              variant="outline-success"
              className="me-2"
              style={{ backgroundColor: "#D4F593", color: "#94AD61" }}
            >
              Sign In
            </Button>
            <Button
              as={Link}
              to="/login"
              variant="outline-success"
              style={{ backgroundColor: "#D4F593", color: "#94AD61" }}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
