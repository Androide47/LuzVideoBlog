import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
    // Add API call to submit the blog post
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: "#94AD61" }}>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="blogTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="blogTitle"
            value={title}
            onChange={handleTitleChange}
            required
            style={{ borderColor: "#E8E1F5" }}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="blogImage">Upload Image</label>
          <input
            type="file"
            className="form-control-file"
            id="blogImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="img-fluid"
              />
            </div>
          )}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="blogContent">Content</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={Blog.modules}
            formats={Blog.formats}
            style={{ borderColor: "#E8E1F5" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ backgroundColor: "#94AD61", borderColor: "#94AD61" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

// Add ReactQuill modules and formats
Blog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"], // remove formatting button
  ],
};

Blog.formats = [
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

export default Blog;
