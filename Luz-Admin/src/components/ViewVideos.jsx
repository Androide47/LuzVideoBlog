import React, { useState } from "react";

const ViewVideos = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: "Video 1", url: "https://via.placeholder.com/150" },
    { id: 2, title: "Video 2", url: "https://via.placeholder.com/150" },
    // Add more video objects as needed
  ]);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>All Videos</h2>
      <ul className="list-group">
        {videos.map((video) => (
          <li
            key={video.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {video.title}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(video.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewVideos;
