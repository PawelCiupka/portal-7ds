import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementLoginForm from "../components/userManagement/loginForm";

const Login = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 922);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });

  return (
    <>
      {" "}
      {isMobile ? (
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
      ) : (
        <>
          <Container className="login-container">
            <div className="login-div-left">
              <div className="logo-container">
                <h1>Portal 7DS</h1>
              </div>
            </div>
            <div className="login-div-right">
              <UserManagementLoginForm />
              <div className="link-to-signup-container">
                <p>
                  Nie masz konta? <Link to="/signup">Zarejestruj się</Link>
                </p>
              </div>
            </div>
          </Container>
        </>
      )}{" "}
    </>
  );
};

export default Login;
