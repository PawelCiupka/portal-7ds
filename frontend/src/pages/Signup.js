import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignUpForm from "../components/userManagement/signupForm";

const Signup = () => {
  return (
    <>
      <Container>
        <SignUpForm />

        <br />
        <p>
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
      </Container>
    </>
  );
};

export default Signup;
