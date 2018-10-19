import React, { Component } from 'react';
import LinkedinSDK from 'react-linkedin-sdk';
// import styles from './styles.css'

class Linkedin extends Component {
    responseLinkedin = (response) => {
        console.log(response);
    }
    render() {  
        return (
            <div>
                <LinkedinSDK
                    clientId="81zxb2usmtp256"
                    callBack={this.responseLinkedin}
                    fields=":(first-name,id,picture-url)"
                    className={'className'}
                    loginButtonText={'Login with Linkedin'}
                    buttonType={'button'}
                />
          </div>
        )
    }
}
export default Linkedin

