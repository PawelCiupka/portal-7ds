import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementSignUpForm from "../components/userManagement/signupForm";

const Signup = () => {
  return (
    <>
      <Container id="register-container">
        <div className="logo-container">
          <h1>Portal 7DS</h1>
          <p>Rejestracja</p>
        </div>
        <UserManagementSignUpForm />
        <div className="link-to-login-container">
          <p>
            Masz już konto? <Link to="/login">Zaloguj się</Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Signup;
