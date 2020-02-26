/**
 * Created by Dell on 26.02.2020.
 */
let initialState = {
    mercedes: [],
    isReady: false
};

export const mercedesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return{
                ...state,
                isReady: true,
                mercedes: action.payload
            };

        default: return state;

    }
};

export const setItemsCreator = (items) => {
    return {
        type: 'SET_ITEMS',
        payload: items
    }
};