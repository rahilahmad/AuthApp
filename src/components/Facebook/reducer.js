
import { combineReducers } from 'redux';

const initialState={
    name:'',
    userID:'',
    email: '',
    picture:'',
    isLoggedIn:true
}
const fbReducer = (state = initialState, action) => {
switch (action.type){
    case 'IS_LOGGED_IN':
    return{
        isLoggedIn: action.payload,    
    }
    
    case 'RESPONSE_FACEBOOK':
        return{
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
    export {reducer}
