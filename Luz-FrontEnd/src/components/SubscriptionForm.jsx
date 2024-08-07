import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // Handle form submission
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: "#94AD61" }}>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
            required
            style={{ borderColor: "#E8E1F5" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3 mb-3"
          style={{ backgroundColor: "#94AD61", borderColor: "#94AD61" }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
