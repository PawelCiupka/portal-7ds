import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementSignUpForm from "../components/userManagement/signupForm";

const Signup = () => {
  return (
    <>
      <Container>
        <UserManagementSignUpForm />

        <br />
        <p>
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
      </Container>
    </>
  );
};

export default Signup;
