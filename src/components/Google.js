import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn:true,
      name: '',
      email: '',
      imageUrl: '',
    }
  }
    responseGoogle = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      name: response.profileObj.name,
      email: response.profileObj.email,
     imageUrl: response.profileObj.imageUrl
  });
  }
  responseGoogleFailure = (error) =>{
      console.log(error);
  };
  
  render() {
    let  gmContent;
    if (this.state.isLoggedIn) {
      gmContent = (
        <div style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
        }}>
           <img src = {this.state.imageUrl} alt ={this.state.name} />
           <h2>Welcome {this.state.name}</h2>
           Email: {this.state.email}
        </div>
    )
    }
    else {
    gmContent =(<GoogleLogin
    clientId="408793953786-gb5hoipegnh5tqco7jn04u08a6ml2d5h.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogleFailure}
  />)
    }
    return (
      <div>
        {gmContent}
      </div>
    )
  }
}
