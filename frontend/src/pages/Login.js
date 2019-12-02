import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementLoginForm from "../components/userManagement/loginForm";

const Login = () => {
  return (
    <>
      <Container className="login-container">
        <div className="logo-container">
          <h1>Portal 7DS</h1>
        </div>
        <UserManagementLoginForm />
        <div className="link-to-signup-container">
          <p>
            Nie masz konta? <Link to="/signup">Zarejestruj się</Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
