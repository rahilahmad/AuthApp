import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';

class App extends Component {

  render() {
   // console.log('testing',this.props.fbStore.isLoggedInNameFacebook);
    // console.log('testingGmail',this.props.gmStore.isLoggedInName);

    let mainContent;
    if (this.props.fbReducer.isLoggedInNameFacebook === false || this.props.gmReducer.isLoggedInName === false) {
      mainContent = (
        <div>
          <p><Facebook /></p>
          <p><Google /></p>
        </div>
      )
    }
    if (this.props.fbReducer.isLoggedInName === true) {
      mainContent = (
        <div>
          <p><Facebook /></p>
        </div>
      ) 
    }
    else {
      <p><Google /></p>
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



