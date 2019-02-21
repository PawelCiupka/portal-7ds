import React from 'react';
import {Link} from 'react-router-dom';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeTxt: 'Login!'
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

export default LoginPage;
