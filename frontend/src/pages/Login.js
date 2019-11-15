import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginForm from "../components/userManagement/loginForm";

const Login = () => {
  return (
    <>
      <Container>
        <LoginForm />

        <br />
        <p>
          Nie masz konta? <Link to="/signup">Zarejestruj się</Link>
        </p>
      </Container>
    </>
  );
};

export default Login;
