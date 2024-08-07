import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for react-quill

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      const objectUrl = URL.createObjectURL(file);
      setVideoPreview(objectUrl);
    }
  };

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (value) => {
    setVideoDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Video Title:", videoTitle);
    console.log("Video Description:", videoDescription);
    console.log("Video File:", videoFile);
    // Add API call to upload video and details
  };

  return (
    <div className="container mt-5">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="videoTitle">Video Title</label>
          <input
            type="text"
            className="form-control"
            id="videoTitle"
            value={videoTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="videoFile">Choose Video File</label>
          <input
            type="file"
            className="form-control-file"
            id="videoFile"
            accept="video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        {videoPreview && (
          <div className="form-group mt-3">
            <label>Video Preview</label>
            <video controls width="100%">
              <source src={videoPreview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="form-group mt-3">
          <label htmlFor="videoDescription">Video Description</label>
          <ReactQuill
            value={videoDescription}
            onChange={handleDescriptionChange}
            modules={UploadVideo.modules}
            formats={UploadVideo.formats}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Upload Video
        </button>
      </form>
    </div>
  );
};

// Add ReactQuill modules and formats
UploadVideo.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"], // remove formatting button
  ],
};

UploadVideo.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
];

export default UploadVideo;
