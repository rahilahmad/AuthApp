import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { responseGmail } from './action';

class Google extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoggedIn: false,
  //     name: '',
  //     email: '',
  //     imageUrl: '',
  //   }
  // }
  // responseGoogle = (response) => {
  //   // console.log(response);
  //   this.setState({
  //     isLoggedIn: true,
  //     name: response.profileObj.name,
  //     email: response.profileObj.email,
  //     imageUrl: response.profileObj.imageUrl
  //   });

  // }
  // responseGoogleFailure = (error) => {
  //   console.log(error);
  // };

  render() {
    let gmContent;
    if (this.props.reducers.isLoggedInName) {
      gmContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px',
        }}>
          <img src={this.props.reducers.picture} alt={this.props.reducers.name} />
          <h2>Welcome {this.props.reducers.name}</h2>
          Email: {this.props.reducers.email}
        </div>
      )
    }
    else {
      gmContent = (<GoogleLogin
        clientId="408793953786-gb5hoipegnh5tqco7jn04u08a6ml2d5h.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={(data) => this.props.respGmail(data)}
      //    onFailure={this.responseGoogleFailure}
      />)
    }
    return (
      <div>
        {gmContent}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  respGmail: data1 => dispatch(responseGmail(data1)),
});

const mapStateToProps = (state) => {
  return {
    reducers: state.reducers.gmReducer
  }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Google);
