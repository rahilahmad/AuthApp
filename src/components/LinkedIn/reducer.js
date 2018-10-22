
const initialState = {
    name: '',
    userID: '',
    email: '',
    picture: '',
    isLoggedInNameLinkedin: false
}
export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN_LINKEDIN':
            return {
                ...state,
                isLoggedInNameLinkedin: action.payload,
            }
        case 'RESPONSE_LINKEDIN':
            return {
                ...state,
                name: action.name,
                userID: action.userID,
                email: action.email-address,
                picture: action.picture
            }
    }
    return state;
}
