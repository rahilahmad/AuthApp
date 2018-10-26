import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { responseGmail } from './action';
import {clientIdGoogle} from '../../config';
import CalendarContainer from '../calender/calender';

class Google extends Component {

  render() {
    const {isLoggedInName,picture,name,email}= this.props.gmStore
    let gmContent;
    if (isLoggedInName=== true) {
      gmContent = (
     <div>
          <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px',
        }}>
          <img src={picture} alt={name} />
          <h2>Welcome {name}</h2>
          Email: {email}
        </div>
        <CalendarContainer />
     </div>
      )
    }
    else {
      gmContent = (<GoogleLogin
        clientId= {clientIdGoogle}
        buttonText="Login with Google"
        onSuccess={(data) => this.props.respGmail(data)}
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
   gmStore: state.gmReducer

  }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Google);
