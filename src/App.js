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
          <p style={{marginLeft : 550}}><Google /></p>
          <p style={{marginLeft : 550}}><Linkedin /></p>
          <p style={{marginLeft : 550}}><Facebook /></p>
        </div>
      )
    }
    else if (isLoggedInNameFacebook === true) {
      mainContent = (
        <div>
          <p style={{marginLeft : 550}}><Facebook /></p>
          <CalendarContainer />
        </div>
      )
    }
    else if (isLoggedInName === true) {
      mainContent = (
        <div>
          <p style={{marginLeft : 550}}><Google /></p>
          <CalendarContainer />
        </div>
      )
    }
    else {
      mainContent = (
        <div>
          <p style={{marginLeft : 550}}><Linkedin /></p>
          <CalendarContainer />
        </div>
      )
    }
    return (
      <div>
          <h1 style={{marginLeft : 550}}>Welcome to Calender</h1>
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



