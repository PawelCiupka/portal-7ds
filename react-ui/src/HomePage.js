import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
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

export default HomePage;