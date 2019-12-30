import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import ContactForm from "./form";
import {
  sendMailToRM,
  sendMailToInternet,
  sendMailToDormAdministration
} from "../../util/mail";

const ContactFormList = () => {
  return (
    <section className="contact-list">
      <Accordion defaultActiveKey="0">
        <Card className="dashboard-card">
          <Card.Header>
            <div>
              <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                <Icon name="add" />
              </Accordion.Toggle>
            </div>
            <div>Formularz kontaktowy z Radą Mieszkańców</div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ContactForm sendMailFunc={sendMailToRM} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="dashboard-card">
          <Card.Header>
            <div>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                <Icon name="add" />
              </Accordion.Toggle>
            </div>
            <div>Formularz kontaktowy z Komisją ds. Internetu</div>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ContactForm sendMailFunc={sendMailToInternet} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="dashboard-card">
          <Card.Header>
            <div>
              <Accordion.Toggle as={Button} variant="primary" eventKey="2">
                <Icon name="add" />
              </Accordion.Toggle>
            </div>
            <div>Formularz kontaktowy z Administracją Akademika</div>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ContactForm sendMailFunc={sendMailToDormAdministration} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  );
};

export default ContactFormList;
