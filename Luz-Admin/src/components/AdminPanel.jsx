import React, { useState } from "react";
import UploadVideo from "./UploadVideo";
import ViewVideos from "./ViewVideos";
import ViewUsers from "./ViewUsers";
import AddUser from "./AddUser";
import Subscribers from "./Subscribers";
import PaymentForms from "./PaymentForms";
import Blog from "./Blog";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = ({ onLogout }) => {
  const [section, setSection] = useState("upload");

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#E8E1F5" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="logos/LogoLuz.jpeg"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          Admin Panel
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setSection("addUser")}
                style={{ color: "#94AD61" }}
              >
                Create New User
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={onLogout}
                style={{ color: "#94AD61" }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div
          className="col-md-2 bg-light"
          style={{ backgroundColor: "#D4F593" }}
        >
          <div className="nav flex-column nav-pills mt-4" role="tablist">
            <a
              className="nav-link"
              href="#"
              onClick={() => setSection("upload")}
            >
              Upload Video
            </a>
            <a className="nav-link" href="#" onClick={() => setSection("blog")}>
              New Blog
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setSection("viewVideos")}
            >
              View Videos
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setSection("viewUsers")}
            >
              View Users
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setSection("subscribers")}
            >
              Subscribers
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setSection("paymentForms")}
            >
              Payment Forms
            </a>
          </div>
        </div>
        <div className="col-md-10">
          <div className="mt-4">
            {section === "upload" && <UploadVideo />}
            {section === "blog" && <Blog />}
            {section === "viewVideos" && <ViewVideos />}
            {section === "viewUsers" && <ViewUsers />}
            {section === "subscribers" && <Subscribers />}
            {section === "addUser" && <AddUser />}
            {section === "paymentForms" && <PaymentForms />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
