import React from 'react';
import axios from "axios";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeTxt: 'Login!'
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios.get(`/api/user/getUsername/${this.state.welcomeTxt}`
    ).then(res => {
      this.setState({ welcomeTxt: res.data})
    });
  }

  render() {
    return (
      <>
        {this.state.welcomeTxt}
        <br/>
        <button onClick={this.handleSubmit}>Dodaj !</button>
      </>
    )
  }
}

export default LoginPage;
