const isloggedIn = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN',
        payload: flag,
    }
}

export function repsonseFacebook(response) {
    return (dispatch) => {
        console.log('1st', response)
        response.then(resp => {
            console.log('2nd', resp)
            dispatch(isloggedIn(true));
            dispatch(setFbLogin(resp));
        }).catch((ex) => {
            dispatch(isloggedIn(false));
            console.log("error", ex);
        });
    }
}

const setFbLogin = (response) => {
    console.log('kkkkkkkkkkkkkkkkkkkkkkkk', response);
    return {
        type: 'RESPONSE_FACEBOOK',
        name: response.name,
        userID: response.userID,
        email: response.email,
        picture: response.picture.data.url
    }
}
