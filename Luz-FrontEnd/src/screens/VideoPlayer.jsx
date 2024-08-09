import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoPlayer = () => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState([
    { id: 1, userName: "John Doe", text: "Great video!" },
    { id: 2, userName: "Jane Smith", text: "Very informative, thanks!" },
  ]);

  const [videos] = useState([
    {
      id: 1,
      title: "Sample Video 1",
      url: "https://www.example.com/sample1.mp4",
    },
    {
      id: 2,
      title: "Sample Video 2",
      url: "https://www.example.com/sample2.mp4",
    },
    {
      id: 3,
      title: "Sample Video 3",
      url: "https://www.example.com/sample3.mp4",
    },
  ]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && userName.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, userName, text: comment },
      ]);
      setComment("");
      setUserName("");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mt-4 mb-4">
        <Col>
          <Link to="/blog">
            <Button variant="secondary">Back to Blog</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Video Title</Card.Title>
              <Card.Text>
                {/* Replace with your video player component */}
                <video width="100%" controls>
                  <source
                    src="https://www.example.com/sample.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Video Description
              </Card.Subtitle>
              <Card.Text>
                This is a sample video description. It provides context and
                information about the video content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Comments</Card.Header>
            <Card.Body>
              <Form onSubmit={handleCommentSubmit}>
                <Form.Group controlId="formUserName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={handleUserNameChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formComment" className="mt-3">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={handleCommentChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  Submit
                </Button>
              </Form>
              <ListGroup className="mt-3">
                {comments.map((comment) => (
                  <ListGroup.Item
                    key={comment.id}
                    className="d-flex justify-content-between"
                  >
                    <div>
                      <strong>{comment.userName}:</strong>
                      <p>{comment.text}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header>Other Videos</Card.Header>
            <Card.Body>
              <Row>
                {videos.map((video) => (
                  <Col md={4} key={video.id} className="mb-3">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/150"
                      />
                      <Card.Body>
                        <Card.Title>{video.title}</Card.Title>
                        <Card.Text>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch Now
                          </a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPlayer;
