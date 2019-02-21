import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeTxt: 'Hello!'
    }
    
  }

  render() {
    return (
      <>
        {this.state.welcomeTxt}
      </>
    )
  }
}

export default Home;
