import React from "react";
import "./csscomponents/footer.css"

function Footer() {
  return (
    <footer className="footer-grid">
      <div className="footer-column">
        <h4>Contacto:</h4>
        <p>Puede comunicarse con nosotros de las siguientes maneras:</p>
        <a href="tel:+54 1161221687">
          <img
            className="contact-logo"
            src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif"
            alt="contacto por whastsapp Alejo"
          />
        </a>
        <a href="mailto:lauty.molinass@gmail.com">
          <img
            className="contact-logo"
            src="https://i.gifer.com/Anm7.gif"
            alt="contacto Mail Lauty"
          />
        </a>
        <a href="https://www.linkedin.com/in/lautaro-molinas">
          <img
            className="contact-logo"
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG17.png"
            alt="contacto Linkedin lauty"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alejo-alberto-sanchez-7b64b8231"
          className="contact-logo"
        >
          <img
            className="contact-logo"
            src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-vert.png"
            alt="contacto Linkedin Alejo"
          />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 InfinitySpace. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;