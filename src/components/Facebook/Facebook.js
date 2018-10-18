import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { repsonseFacebook } from './action';

class Facebook extends Component {

    componentClicked = () => {
        console.log("Clicked");
    };
    render() {
        let fbContent;
        if (this.props.fbReducer.isLoggedInName) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={this.props.fbReducer.picture} alt={this.props.fbReducer.name} />
                    <h2>Welcome {this.props.fbReducer.name}</h2>
                    Email: {this.props.fbReducer.email}
                </div>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="310633369729517"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
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
        fbReducer: state.fbReducer
    }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Facebook);