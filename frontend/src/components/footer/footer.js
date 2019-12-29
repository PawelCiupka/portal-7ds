import React from "react";
import { getFullYear } from "../../helpers/dateHelper";
import FooterRegulationModal from "./regulationModal";

const Footer = () => {
  return (
    <section className="footer">
      <p className="developer-information">
        <span>© {getFullYear()}</span>
        <span>
          <a
            href="https://github.com/pawelciupka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paweł Ciupka
          </a>
        </span>
      </p>
      <p className="project-information">
        <FooterRegulationModal regulationsSymbol="regulations" />
      </p>
    </section>
  );
};

export default Footer;
