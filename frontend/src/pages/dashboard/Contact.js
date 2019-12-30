import React from "react";
import ContactFormList from "../../components/contact/formList";

const Contact = () => {
  return (
    <>
      <div className="dashboard-page-title">
        <h4>Kontakt</h4>
      </div>
      <p>
        W wiadomości wykorzystane są informację o Tobie, które widnieją na
        portalu, więc nie musisz się przedstawiać :)
      </p>
      <ContactFormList />
    </>
  );
};

export default Contact;
