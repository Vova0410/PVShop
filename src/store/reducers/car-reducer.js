/**
 * Created by Dell on 01.03.2020.
 */
let initialState = {
    cars: [],
    isReady: false
};

export const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return{
                ...state,
                cars: action.payload,
                isReady: true,
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