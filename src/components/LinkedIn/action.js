const isloggedInLinkedin = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_LINKEDIN',
        payload: flag,
    }
}

export function repsonseLinkedin(response) {
    return (dispatch) => {
        dispatch(isloggedInLinkedin(true));
        dispatch(setlinkLogin(response));
    }
}

const setlinkLogin = (response) => {
    return {
        type: 'RESPONSE_LINKEDIN',
        name: response.firstName,
        userID: response.id,
        email: response.email-address,
        picture: response.pictureUrl
    }
}
