import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default () => (
  <>
    <Container className="welcome-container">
      <div className="logo-container">
        <h1>Portal 7DS</h1>
      </div>
      <div className="link-to-signup-login-container">
        <p>
          <Link to="/signup">Zarejestruj się</Link>
        </p>

        <p>
          <Link to="/login">Zaloguj się</Link>
        </p>
      </div>
    </Container>
  </>
);
