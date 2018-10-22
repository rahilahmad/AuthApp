const isloggedInFacebook = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN_FACEBOOK',
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
    if(response.name === ''){
        return (dispatch)=>{
            dispatch(isloggedInFacebook(false));
        }
    }
    else {
    return (dispatch) => {
        dispatch(isloggedInFacebook(true));
        dispatch(setFbLogin(response));
    }
}
}

