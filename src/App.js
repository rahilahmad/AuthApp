import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';

class App extends Component {
  render() {
    let mainContent;
    if (this.props.fbReducer.isLoggedInName === false && this.props.gmReducer.isLoggedInName === false) {
      mainContent = (
        <div>
          <p><Facebook /></p>
          <p><Google /></p>
        </div>
      )
    }
    else if (this.props.fbReducer.isLoggedInName === true) {
      mainContent = (
        <div>
          <p><Facebook /></p>
        </div>
      )
    }
    else {
      <p> <Google /></p>
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
    gmReducer: state.gmReducer,
    fbReducer: state.fbReducer
  }
}


export default connect(mapStateToProps)(App);



