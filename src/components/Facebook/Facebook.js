import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { repsonseFacebook } from './action';

class Facebook extends Component {

    render() {
        let fbContent;
        if (this.props.fbStore.isLoggedInNameFacebook===true) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={this.props.fbStore.picture} alt={this.props.fbStore.name} />
                    <h2>Welcome {this.props.fbStore.name}</h2>
                    Email: {this.props.fbStore.email}
                </div>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="310633369729517"
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