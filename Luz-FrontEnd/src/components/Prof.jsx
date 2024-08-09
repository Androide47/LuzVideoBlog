import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const ProfSection = () => {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: "#8b8863" }}>
          Pruebas sociales (Proof):
        </h2>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <Card
              style={{
                backgroundColor: "#8b8863",
                border: "none",
                color: "#FFFFFF",
              }}
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="María P."
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  margin: "0 auto",
                  marginTop: "-75px",
                }}
              />
              <Card.Body className="text-center">
                <Card.Text>
                  "Gracias a Luz, he podido redescubrirme y vivir con una
                  claridad y propósito que nunca creí posible. Su guía y apoyo
                  han sido invaluables en mi camino de transformación." - María
                  P.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card
              style={{
                backgroundColor: "#8b8863",
                border: "none",
                color: "#FFFFFF",
              }}
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Ana G."
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  margin: "0 auto",
                  marginTop: "-75px",
                }}
              />
              <Card.Body className="text-center">
                <Card.Text>
                  "El enfoque práctico y empoderador de Luz me ha permitido
                  enfrentar mis miedos y vivir una vida más auténtica.
                  Recomiendo sus programas a todas las mujeres que buscan un
                  cambio real." - Ana G.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfSection;
