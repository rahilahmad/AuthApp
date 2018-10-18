import { combineReducers } from 'redux';

const initialState = {
    name: '',
    userID: '',
    email: '',
    picture: '',
}
const gmReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return {
                ...state,
                isLoggedInName: action.payload,
            }
        case 'RESPONSE_GMAIL':
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
const gmailReducer = combineReducers({
    gmReducer,
})
export { gmailReducer }
