import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__social">
        <a
          target="_blank"
          href="https://www.facebook.com/codinglatam/"
          rel="noopener noreferrer"
        >
          <span className="icon icon-facebook"></span>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/codinglatam/"
          rel="noopener noreferrer"
        >
          <span className="icon icon-instagram"></span>
        </a>
        <a
          target="_blank"
          href="https://discord.gg/7bpGcDT"
          rel="noopener noreferrer"
        >
          <span className="icon icon-discord"></span>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/codinglatam"
          rel="noopener noreferrer"
        >
          <span className="icon icon-twitter"></span>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCS0emIw9cgv9RIMowHlq3ng"
          rel="noopener noreferrer"
        >
          <span className="icon icon-youtube"></span>
        </a>
      </div>
      <div className="footer__content">
        <p>© Coding Latam 2020. Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
