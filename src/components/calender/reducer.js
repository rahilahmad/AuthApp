
export const calenderReducer = (state={},action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.events,
            }
    }
    return state;
}
