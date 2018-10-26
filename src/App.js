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
          <p><Google /></p>
          <p><Linkedin /></p>
          <p><Facebook /></p>
        </div>
      )
    }
    else if (isLoggedInNameFacebook === true) {
      mainContent = (
        <div>
          <p><Facebook /></p>
        </div>
      )
    }
    else if (isLoggedInName === true) {
      mainContent = (
        <div>
          <p><Google /></p>
        </div>
      )
    }
    else if (isLoggedInNameLinkedin === true) {
      mainContent = (
        <div>
          <p ><Linkedin /></p>
        </div>
      )
    }
    return (
      <div>
        <h1 style={{ marginLeft: 500 }}>Welcome to Calender</h1>
        <div style={{ marginLeft: 500 }} >
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



