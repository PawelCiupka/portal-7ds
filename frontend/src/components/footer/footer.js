import React from "react";
import { getFullYear } from "../../helpers/dateHelper";

const Footer = () => {
  return (
    <section className="footer">
      <p className="developer-information">
        <span>© {getFullYear()}</span>
        <span>
          <a href="https://github.com/pawelciupka" target="_blank">
            Paweł Ciupka
          </a>
        </span>
      </p>
      <p className="project-information">
          <a>Regulamin</a>
      </p>
    </section>
  );
};

export default Footer;
