import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Stakes = () => {
  return (
    <div
      style={{ backgroundColor: "#8b8863", color: "#ffffff", height: "100vh" }}
    >
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={6} className="p-5">
            <h2>Descubre tu potencial</h2>
            <p>
              ¿Te has sentido atrapada, sin claridad o propósito en tu vida?
              ¿Sientes que tienes un gran potencial pero no sabes cómo
              liberarlo? Aquí entenderás la importancia de tomar acción y cómo
              el compromiso con tu crecimiento personal puede cambiar tu vida.
              Sin estos elementos, seguirás en el mismo lugar, sin alcanzar la
              plenitud que deseas y mereces.
            </p>
          </Col>
          <Col md={6} className="p-0">
            <img
              src="your-image-path.jpg"
              alt="Blogger"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stakes;
