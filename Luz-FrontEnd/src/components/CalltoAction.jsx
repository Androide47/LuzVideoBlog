import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const CallToAction = () => {
  return (
    <div
      style={{ backgroundColor: "#8b8863", color: "white", padding: "50px 0" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2>Forma de empezar (Call to Action):</h2>
            <p>
              ¿Estás lista para liberar tu potencial? Únete a nuestra comunidad
              de mujeres valientes y decididas. Comienza hoy tu viaje de
              transformación. Regístrate ahora.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <Button
              variant="light"
              size="lg"
              style={{ backgroundColor: "#94AD61", color: "white" }}
            >
              Regístrate ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
