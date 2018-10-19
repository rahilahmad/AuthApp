
const initialState = {
    name: '',
    userID: '',
    email: '',
    picture: '',
    isLoggedInName: false
}
export const fbReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN_FACEBOOK':
            return {
                ...state,
                isLoggedInName: action.payload,
            }
        case 'RESPONSE_FACEBOOK':
            return {
                ...state,
                name: action.name,
                userID: action.userID,
                email: action.email,
                picture: action.picture
            }
    }
    return state;
}
