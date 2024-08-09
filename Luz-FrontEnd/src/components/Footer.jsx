import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-center py-5"
      style={{ backgroundColor: "#E8E1F5", color: "#000000" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" style={{ color: "#000000" }}>
                  Contact Us
                </Link>
              </li>
              <li>Email: support@myapp.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Options</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/subscribe" style={{ color: "#000000" }}>
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: "#000000" }}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ color: "#000000" }}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal Disclosure</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms" style={{ color: "#000000" }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: "#000000" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" style={{ color: "#000000" }}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Other Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" style={{ color: "#000000" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: "#000000" }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: "#000000" }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
