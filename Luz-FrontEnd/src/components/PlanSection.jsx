import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PlanSection = () => {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "50px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={1} className="text-center">
            <img
              src="logos/4.png"
              alt="Decorative Left"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={10}>
            <h2 style={{ color: "#000", textAlign: "center" }}>Plan</h2>
            <p style={{ color: "#000", textAlign: "center" }}>
              Descubre: Accede a recursos y contenido diseñado para ayudarte a
              iniciar tu viaje de transformación.
              <br />
              Aprende: Participa en nuestros talleres y sesiones de mentoría
              para profundizar en tu crecimiento personal.
              <br />
              Transforma: Aplica las herramientas y estrategias aprendidas para
              vivir con mayor confianza y propósito.
            </p>
          </Col>
          <Col xs={12} md={1} className="text-center">
            <img
              src="logos/5.png"
              alt="Decorative Right"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlanSection;
