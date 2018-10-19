import React, { Component } from 'react';
import LinkedinSDK from 'react-linkedin-sdk';
import { connect } from 'react-redux';
import { repsonseLinkedin } from './action';

class  Linkedin extends Component {
    render() {

        let linkContent;
        if (this.props.linkStore.isLoggedInNameLinkedin) {
            linkContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={this.props.linkStore.picture} alt={this.props.linkStore.name} />
                    <h2>Welcome {this.props.linkStore.name}</h2>
                    Email: {this.props.linkStore.email}
                </div>
            )
        }
        else {
            linkContent = (
                <LinkedinSDK
                clientId="81zxb2usmtp256"
                callBack={(data) => this.props.respFacebook(data)}
                fields=":(first-name,id,picture-url)"
                className={'className'}
                loginButtonText={'Login with Linkedin'}
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