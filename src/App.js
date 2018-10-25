import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';
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
    else if (isLoggedInNameLinkedin === true) {
      mainContent = (
        <p><Linkedin /></p>
      )
    }
    else if (isLoggedInName === true) {
      mainContent = (
        <p><Google /></p>
      )
    }
    else {
      mainContent = (
        <p><Facebook /></p>
      )
    }
    return (
      <div>
        {mainContent}
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



