const isloggedIn = (flag) => {
    console.log("action console", flag)
    return {
        type: 'IS_LOGGED_IN',
        payload: flag,
    }
}

const repsonseFacebook = (response) => {
    console.log(response);
    return {
        type: 'RESPONSE_FACEBOOK',
        name: response.name,
        userID: response.userID,
        email: response.email,
        picture: response.picture.data.url
    }
}
export { isloggedIn, repsonseFacebook }
