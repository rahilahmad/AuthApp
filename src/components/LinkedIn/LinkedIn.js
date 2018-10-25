import React, { Component } from 'react';
import LinkedinSDK from 'react-linkedin-sdk';
import { connect } from 'react-redux';
import { repsonseLinkedin } from './action';
import {clientIdLinkedin} from '../../config'

class Linkedin extends Component {
    render() {
            const {isLoggedInNameLinkedin,picture,name,email}=this.props.linkStore
        let linkContent;
        if (isLoggedInNameLinkedin) {
            linkContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={picture} alt={name} />
                    <h2>Welcome {name}</h2>
                    {/* Email: {email} */}
                    Email: {email}
                </div>
            )
        }
        else {
            linkContent = (
                <LinkedinSDK 
                    clientId= {clientIdLinkedin}
                    callBack={(data) => this.props.respLinkedin(data)}
                    fields=":(first-name,id,picture-url,email-address)"
                    className={'className'}
                    buttonType={'button'}
                />
            )
        }
        return (
            <div>
                {linkContent}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    respLinkedin: data1 => dispatch(repsonseLinkedin(data1)),
});

const mapStateToProps = (state) => {
    return {
        linkStore: state.linkReducer
    }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Linkedin);