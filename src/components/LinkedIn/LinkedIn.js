import React, { Component } from 'react';
import LinkedIn from 'react-linkedin-login';
import styles from './styles.css'

class Linkedin extends Component {
    callbackLinkedIn = (response) => {
        console.log(response);
    }
    render(){
        return(
        <LinkedIn 
        clientId='81zxb2usmtp256'
        callback={this.callbackLinkedIn}
        className={styles.linkedin}
        text='LinkedIn'
         />
         )
    }
}
export default Linkedin
