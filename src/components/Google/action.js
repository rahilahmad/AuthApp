const isloggedInGmail = (flag) => {
    return {
        type: 'IS_LOGGED_IN',
        payload: flag,
    }
}
const setGmLogin = (response) => {
    return {
        type: 'RESPONSE_GMAIL',
        name: response.profileObj.name,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl
    }
}
export function responseGmail(response){
    return (dispatch) => {
        dispatch(isloggedIn(true));
        dispatch(setGmLogin(response))
    }
}