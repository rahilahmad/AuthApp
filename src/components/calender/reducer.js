const calenderReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.events,
            }
        default:  
    }
    return state;
}

export default calenderReducer;
