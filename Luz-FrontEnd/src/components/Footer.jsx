import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-center py-5"
      style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" style={{ color: "#FFFFFF" }}>
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
                <Link to="/subscribe" style={{ color: "#FFFFFF" }}>
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: "#FFFFFF" }}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ color: "#FFFFFF" }}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal Disclosure</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms" style={{ color: "#FFFFFF" }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: "#FFFFFF" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" style={{ color: "#FFFFFF" }}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Other Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" style={{ color: "#FFFFFF" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: "#FFFFFF" }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: "#FFFFFF" }}>
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
