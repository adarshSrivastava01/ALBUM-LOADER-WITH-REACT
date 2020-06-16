import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer__box">
        <div className="Footer_by">Created By:</div>
        <div className="Footer__name">
          Adarsh Srivastava &copy;<span className="year">2020</span>
        </div>
        <div className="Footer__email">herecomesthebeastlesnar@gmail.com</div>
        <a
          className="Footer__button"
          href="mailto:herecomesthebeastlesnar@gmail.com"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Footer;
