import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook/Facebook';
import Google from './components/Google/Google';

class App extends Component {
  render() {
    return (
      <div>
        <p><Facebook /></p>
         <p><Google /></p> 
      </div>
    );
  }
}

export default App;



