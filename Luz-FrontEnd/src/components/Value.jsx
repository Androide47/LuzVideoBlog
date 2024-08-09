import React from "react";

const ValuePropSection = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#877263", // Background color as specified
        color: "white", // Text color
        height: "100vh", // Full screen height
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <img
          src="path_to_image.jpg" // Replace with your image path
          alt="Value Prop"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h2>El valor del contenido (Value Prop)</h2>
        <p>
          En este espacio, encontrarás herramientas y estrategias prácticas que
          te guiarán a vivir con mayor confianza, claridad y propósito. A través
          de la disciplina y las neuroasociaciones, transformarás tus
          pensamientos y emociones, desbloqueando tu verdadero potencial. Mi
          misión es empoderarte para que puedas vivir una vida auténtica y llena
          de propósito.
        </p>
      </div>
    </div>
  );
};

export default ValuePropSection;
