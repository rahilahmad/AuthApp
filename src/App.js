import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';

class App extends Component {

  render() {
    console.log('testing',this.props.reducers.isLoggedInName);
    // let mainContent;
    // if (this.props.fbReducer.isLoggedInName === false || this.props.gmReducer.isLoggedInName === false) {
    //   mainContent = (
    //     <div>
    //       <p><Facebook /></p>
    //       <p><Google /></p>
    //     </div>
    //   )
    // }
    // console.log('rhrhrhrhr', this.props.reducers.name)
    // if (this.props.reducers.isLoggedInName === true) {
    //   mainContent = (
    //     <div>
    //       <p><Facebook /></p>
    //     </div>
    //   ) 
    // }
    // else {
    //   <p><Google /></p>
    // }
    return (
      <div>
       <Facebook />
       <Google />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reducers: state.fbReducer

  }
 
}

export default connect(mapStateToProps)(App);



