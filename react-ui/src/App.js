import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

// Styles
import './styles/app.css';

// Routing class
class App extends Component {
  render() {
    return (
      <>
        <ul className="app-menu">
          <li><a href='/'>Home</a></li>
          <li><a href='/register'>Register</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>

        <Router>
          <>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            
          </>
        </Router>
       
      </>
    );
  }
}

export default App;