import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn:false,
    }
  }
    responseGoogle = (response) => {
    console.log(response);
  }
  render() {
    let  gmContent;
    if (this.state.isLoggedIn) {
    }
    else {
      gmContent(
        <GoogleLogin
    clientId="408793953786-gb5hoipegnh5tqco7jn04u08a6ml2d5h.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
  />
      )
    }
    return (
      <div>
        {gmContent}
      </div>
    )
  }
}
