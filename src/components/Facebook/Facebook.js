import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { repsonseFacebook } from './action';
import {appId} from '../../config'

class Facebook extends Component {

    render() {
        const { isLoggedInNameFacebook, name, picture, email } = this.props.fbStore
        let fbContent;
        if (isLoggedInNameFacebook === true ) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={picture} alt={name} />
                    <h2>Welcome {name}</h2>
                    Email: {email}
                </div>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId= {appId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={(data) => this.props.respFacebook(data)} />
            )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    respFacebook: data1 => dispatch(repsonseFacebook(data1)),
});

const mapStateToProps = (state) => {
    return {
        fbStore: state.fbReducer
    }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Facebook);