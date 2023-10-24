import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
const Navbar = () => {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    const handleMenuClick = () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    };

    menuBtn.addEventListener("click", handleMenuClick);

    return () => {
      // Limpiar el evento al desmontar el componente para evitar fugas de memoria
      menuBtn.removeEventListener("click", handleMenuClick);
    };
  }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <header>
      <a href="#" className="brand">Space</a>
      <div className="menu-btn">
        <div className="navigation">
          <div className="navigation-items">
          <Link to="/">Home</Link>
            <Link to="/gallery">Explorar</Link>
            <Link to="/About">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
