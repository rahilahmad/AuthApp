const isloggedInFacebook = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_FACEBOOK',
        payload: flag,
    }
}

export function repsonseFacebook(response) {
    return (dispatch) => {
        dispatch(isloggedInFacebook(true));
        dispatch(setFbLogin(response));
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
