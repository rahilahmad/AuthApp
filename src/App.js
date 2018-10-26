import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';
import CalendarContainer from './components/calender/calender';
import Linkedin from './components/LinkedIn/LinkedIn';

class App extends Component {

  render() {
    const { isLoggedInNameFacebook } = this.props.fbStore
    const { isLoggedInName } = this.props.gmStore
    const { isLoggedInNameLinkedin } = this.props.linkStore
    let mainContent;

    if (isLoggedInNameFacebook === false && isLoggedInName === false && isLoggedInNameLinkedin === false) {
      mainContent = (
        <div>
          <p style={{marginLeft : 500}}><Google /></p>
          <p style={{marginLeft : 500}}><Linkedin /></p>
          <p style={{marginLeft : 500}}><Facebook /></p>
        </div>
      )
    }
    else if (isLoggedInNameFacebook === true) {
      mainContent = (
        <div>
          <p style={{marginLeft : 500}}><Facebook /></p>
        </div>
      )
    }
    else if (isLoggedInName === true) {
      mainContent = (
        <div>
          <p style={{marginLeft : 500}}><Google /></p>
        </div>
      )
    }
    else {
      mainContent = (
        <div>
          <p style={{marginLeft : 500}}><Linkedin /></p>
        </div>
      )
    }
    return (
      <div>
          <h1 style={{marginLeft : 500}}>Welcome to Calender</h1>
      <div >
        {mainContent}
      </div>
      </div>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fbStore: state.fbReducer,
    gmStore: state.gmReducer,
    linkStore: state.linkReducer
  }
}

export default connect(mapStateToProps)(App);



