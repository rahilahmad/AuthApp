
import { combineReducers } from 'redux';

const initialState = {
    name: '',
    userID: '',
    email: '',
    picture: '',
}
const fbReducer = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return {
                ...state,
                isLoggedInName: action.payload,
            }
        case 'RESPONSE_FACEBOOK':
            console.log(state)
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
const reducer = combineReducers({
    fbReducer,
})
export { reducer }
