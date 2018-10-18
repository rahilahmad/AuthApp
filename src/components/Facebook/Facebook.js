import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isloggedIn } from './action';

 class Facebook extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoggedIn: false,
                userID: '',
                name: '',
                email: '',
                picture: ''
            }
        }
        componentClicked = () => {
            console.log("Clicked");
        };
        // responseFacebook = () => {
        //     //  console.log(response);
        //     this.setState({
        //         isLoggedIn: this.props.loginInReducer,
        //         name: this.props.fbResponse.name,
        //         // isLoggedIn: true,
        //         // name: response.name,
        //         // userID: response.userID,
        //         // email: response.email,
        //         // picture: response.picture.data.url
        //     });
        // };
        render() {
            let fbContent;
            if (this.props.fbReducer.isloggedIn) {
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
                        callback={this.props.isloggedIn(true)} />
                )
            }
            return (
                <div>
                    {fbContent}
                </div>
            )
        }
    }
const mapDispatchToProps = (dispatch) => {
    bindActionCreators({ isloggedIn }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        fbReducer :state.fbReducer
    }
}
export default connect(mapStateToProps)(mapDispatchToProps)(Facebook);