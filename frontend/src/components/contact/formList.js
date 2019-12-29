import React from "react";
import { Card } from "react-bootstrap";
import ContactForm from "./form";

const ContactFormList = () => {
  return (
    <>
      <Card className="dashboard-card">
        <ContactForm title="Formularz kontaktowy z Radą Mieszkańców" />
      </Card>
      <Card className="dashboard-card">
        <ContactForm title="Formularz kontaktowy z Komisją ds. Internetu" />
      </Card>
      <Card className="dashboard-card">
        <ContactForm title="Formularz kontaktowy z Administracją Akademika" />
      </Card>
    </>
  );
};

export default ContactFormList;
