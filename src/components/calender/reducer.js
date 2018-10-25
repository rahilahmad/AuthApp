
export const calenderReducer = (action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.events,
            }
    }
    return state;
}
