// src/components/LatestVideos.jsx

import React from "react";
import { Link } from "react-router-dom";

const LatestVideos = ({ videos }) => {
  const latestVideos = videos.slice(-3).reverse(); // Get the latest 3 videos

  return (
    <div className="latest-videos container mt-5 mb-5">
      <h2 className="mb-4 text-center">Latest Videos</h2>
      <div className="row">
        {latestVideos.map((video, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                controls
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to={`/video/${video.id}`}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </Link>
                  </div>
                  <small className="text-muted">{video.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVideos;
