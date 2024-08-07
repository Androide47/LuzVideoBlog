import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div id="about-us" className="container mt-5 mb-5">
      <h2>Sobre mi</h2>
      <div className="row">
        <div className="col-md-8">
          <p>
            Hola, soy Luz Hernández. Mi camino en el trabajo personal y la
            conciencia comenzó, cuando me di cuenta que tenía más de 30 años y
            no había encontrado algo que me apasionara y eso me obligó a
            replantear mi vida. Este momento fue un catalizador para un profundo
            cambio interior.
          </p>
          <p>
            A través de la disciplina y las neuroasociaciones, logré transformar
            mis pensamientos y emociones. Este viaje me llevó a descubrir mi
            verdadera pasión: ayudar a otras mujeres a desbloquear su potencial
            y vivir con confianza y propósito. Hoy, con la guía de grandes
            mentoras, mucho estudio y autoaprendizaje, he creado un espacio
            donde puedo compartir mis enseñanzas y herramientas prácticas para
            que más mujeres puedan experimentar su propio cambio.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/300x300"
            className="img-fluid rounded"
            alt="Luz, the live coach"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
