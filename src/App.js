import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';

class App extends Component {

  render() {
    let mainContent;
    if (this.props.fbStore.isLoggedInNameFacebook === false && this.props.gmStore.isLoggedInNameGoogle === false) {
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



