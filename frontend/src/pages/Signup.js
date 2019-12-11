import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementSignUpForm from "../components/userManagement/signupForm";

const Signup = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 922);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });
  return (
    <>
      {/* {isMobile ? (
        <Container className="register-container">
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
      ) : (
        <Container className="register-container">
          <div className="register-div-left">
            <div>
              <UserManagementSignUpForm />
              <div className="link-to-login-container">
                <p>
                  Masz już konto? <Link to="/login">Zaloguj się</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="register-div-right">
            <div className="logo-container">
              <h1>Portal 7DS</h1>
              <h3>Rejestracja</h3>
            </div>
          </div>
        </Container>
      )} */}
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
