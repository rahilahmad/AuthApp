const isloggedInFacebook = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_FACEBOOK',
        payload: flag,
    }
}
const isloggedInFacebookFalse = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_FACEBOOK_FALSE',
        payload: flag,
    }
}
const setFbLogin = (response) => {
    return {
        type: 'RESPONSE_FACEBOOK',
        name: response.name,
        userID: response.userID,
        email: response.email,
        picture: response.picture.data.url
    }
}

export function repsonseFacebook(response) {

    return (dispatch) => {
        // if (response.name === " ") {
        //     dispatch(isloggedInFacebookFalse(false));
        // }
        // else {
            dispatch(isloggedInFacebook(true));
            dispatch(setFbLogin(response));
        // }
    }

}

