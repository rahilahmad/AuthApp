
export const fbReducer = (action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.events,
            }
    }
    return state;
}
