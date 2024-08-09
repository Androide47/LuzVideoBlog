import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const Login = localStorage.getItem("Login");
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: "#E8E1F5" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color: "#94AD61" }}>
          <img
            src="logos/2.png"
            height="70"
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
            <NavDropdown
              title={
                <>
                  <img
                    src="flags/us.png"
                    alt="English"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  Language
                </>
              }
              id="language-dropdown"
            >
              <NavDropdown.Item href="#/en">
                <img
                  src="flags/us.png"
                  alt="English"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#/es">
                <img
                  src="flags/mx.png"
                  alt="Spanish"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Spanish
              </NavDropdown.Item>
            </NavDropdown>
            {Login ? (
              <>
                <Button
                  as={Link}
                  to="/"
                  variant="outline-success"
                  className="me-2"
                  style={{ backgroundColor: "#D4F593", color: "#94AD61" }}
                >
                  Sign Out
                </Button>
                <Button
                  as={Link}
                  to="/profile"
                  variant="outline-success"
                  style={{ backgroundColor: "#D4F593", color: "#94AD61" }}
                >
                  Profile
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
