import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';
import Linkedin from './components/LinkedIn/LinkedIn';

class App extends Component {

  render() {
    let mainContent;
    if (this.props.fbStore.isLoggedInNameFacebook === false && this.props.gmStore.isLoggedInName === false) {
      mainContent = (
        <div>
          <p><Facebook /></p>
          <p><Google /></p>
        </div>
      )
    }
    else if (this.props.fbStore.isLoggedInNameFacebook === true ) {
      mainContent = (
        <div>
          <p><Facebook /></p>
        </div>
      ) 
    }
    else {
      mainContent = (
        <p><Google /></p>
      )
      
    }
    return (
      <div>
        <Linkedin />
        {mainContent}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
   fbStore: state.fbReducer,
   gmStore: state.gmReducer,
  } 
}

export default connect(mapStateToProps)(App);



