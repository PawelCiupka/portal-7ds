import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './Home';


// Routing class
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          
        </>
      </Router>
    );
  }
}

export default App;