import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const videos = [
    {
      id: 1,
      title: "Test Video 1",
      description: "Description of Test Video 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Test Video 2",
      description: "Description of Test Video 2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Test Video 3",
      description: "Description of Test Video 3",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Test Video 4",
      description: "Description of Test Video 4",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container className="mt-5">
      <h2>Blog</h2>
      <Row>
        {videos.map((video) => (
          <Col key={video.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={video.thumbnail} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <Button as={Link} to={`/video/${video.id}`} variant="primary">
                  Watch Video
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
