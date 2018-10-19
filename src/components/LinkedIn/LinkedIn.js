import React, { Component } from 'react';
import LinkedinSDK from 'react-linkedin-sdk'
// import styles from './styles.css'

class Linkedin extends Component {
    responseLinkedin = (response) => {
        console.log(response);
    }
    render() {
        console.log('ssdsdsdfsfed')
        return (
            <div>
                <LinkedinSDK
                    clientId="81zxb2usmtp256"
                    callBack={this.responseLinkedin}
                    fields=":(first-name,id,num-connections,picture-url)"
                    className={'className'}
                    loginButtonText={'Login with Linkedin'}
                    // logoutButtonText={'Logout from Linkedin'}
                    buttonType={'button'}
                    // icon={<Icon />}
                />,
          </div>

        )
    }
}
export default Linkedin
