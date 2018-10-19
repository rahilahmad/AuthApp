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
        console.log(state.reducers)
        if (this.props.reducers.fbReducer.isloggedInName) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                }}>
                    <img src={this.props.reducers.fbReducer.picture} alt={this.props.reducers.fbReducer.name} />
                    <h2>Welcome {this.props.reducers.fbReducer.name}</h2>
                    Email: {this.props.reducers.fbReducer.email}
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
        reducers: state.reducers
    }
}
export default connect(mapStateToProps, () => mapDispatchToProps)(Facebook);