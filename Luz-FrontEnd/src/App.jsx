import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./screens/SignIn"; // Ensure this file exists and is correctly named
import LogIn from "./screens/LogIn"; // Ensure this file exists and is correctly named
import Home from "./screens/Home"; // Import the new Home component
import Blog from "./screens/Blog";
import VideoPlayer from "./screens/VideoPlayer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
