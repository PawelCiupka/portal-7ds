import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementLoginForm from "../components/userManagement/loginForm";

const Login = () => {
  return (
    <>
      <Container>
        <UserManagementLoginForm />

        <br />
        <p>
          Nie masz konta? <Link to="/signup">Zarejestruj się</Link>
        </p>
      </Container>
    </>
  );
};

export default Login;
