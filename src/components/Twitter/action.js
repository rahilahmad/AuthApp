const isloggedIn = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_TWITTER',
        payload: flag,
    }
}
export function repsonseFacebook(response) {
    return (dispatch) => {
        dispatch(isloggedIn(true));
        dispatch(setTwitterLogin(response));
    }
}

const setTwitterLogin = (response) => {
    return {
        type: 'RESPONSE_FACEBOOK',
        name: response.name,
        userID: response.userID,
        email: response.email,
        picture: response.picture.data.url
    }
}
