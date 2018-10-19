import React, { Component } from 'react';
import LinkedIn from 'react-linkedin-login';
import styles from './styles.css'

export default class Linkedin extends Component {
    callback = (response) => {
        console.log(response);
    }
    render(){
        <LinkedIn 
        clientId='81zxb2usmtp256'
        callback={this.callbackLinkedIn}
        className={styles.linkedin}
        text='LinkedIn'
         />
    }
}

