import React, { useEffect } from 'react';
import './csscomponents/home.css'; 
import { Link } from 'react-router-dom';
import image1 from "./1.webp";
import image2 from "./2.webp";
import image3 from "./3.webp";

const Home = () => {
  useEffect(() => {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");

    const sliderNav = function(manual) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });
  }, []); // El segundo parámetro [] asegura que el efecto solo se ejecute una vez, equivalente a componentDidMount

  return (
    <section className="home">
      <img decoding="async" className="img-slide active" src={image1} alt="" />
      <img decoding="async" className="img-slide" src={image2} alt="" />
      <img decoding="async" className="img-slide" src={image3} alt="" />
      <div className="content active">
        <h1>Explorando la Luna con la NASA.<br /><span>Descubre los misterios lunares</span></h1>
        <p>Explora imágenes fascinantes de la luna capturadas por la NASA y sumérgete en la belleza única de nuestro
          satélite natural.</p>
        <Link to="/gallery">Explorar</Link>
      </div>
      <div className="content">
        <h1> Historias Lunares<br /><span>Narrativas a la luz de la luna</span></h1>
        <p>Adéntrate en las historias y eventos que han ocurrido en relación con la exploración lunar. Desde las misiones
          históricas hasta los descubrimientos científicos más recientes.</p>
        <Link to="/gallery">Explorar</Link>
      </div>
      <div className="content">
        <h1>La Luna en Detalle<br /><span> Un vistazo más cercano</span></h1>
        <p>Descubre detalles fascinantes sobre la superficie lunar a través de imágenes de alta resolución proporcionadas
          por la NASA. Observa cráteres, montañas y otros fenómenos geológicos.</p>
        <Link to="/gallery">Explorar</Link>
      </div>
      <div className="media-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="slider-navigation">
        <div className="nav-btn active"></div>
        <div className="nav-btn"></div>
        <div className="nav-btn"></div>
      </div>
    </section>
  );
};

export default Home;
