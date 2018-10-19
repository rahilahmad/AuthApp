import React, { Component } from 'react';
import LinkedinSDK from 'react-linkedin-sdk'
// import styles from './styles.css'

class Linkedin extends Component {
    responseLinkedin = (response) => {
        console.log(response);
    }
    // asas
    render() {
        return (
            <div>
                <LinkedinSDK
                    clientId="123456789010"
                    callBack={this.responseLinkedin}
                    fields=":(id,num-connections,picture-url)"
                    className={'className'}
                    loginButtonText={'Login with Linkedin'}
                    //logoutButtonText={'Logout from Linkedin'}
                    buttonType={'button'}
                    icon={<Icon />}
                    getOAuthToken
                />,
          </div>

        )
    }
}
export default Linkedin
