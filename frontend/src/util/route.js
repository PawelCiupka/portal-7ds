import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ session: { userId, role } }) => ({
  loggedIn: Boolean(userId),
  userRole: role
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const ProtectedExtra = ({ loggedIn, userRole, path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      loggedIn && userRole === "admin" ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedExtraRoute = withRouter(connect(mapStateToProps)(ProtectedExtra));
