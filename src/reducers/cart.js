import * as types from '../constants/ActionType';

let defaultState = localStorage.getItem('cart');

if (defaultState) {
    defaultState = JSON.parse(defaultState);
} else {
    defaultState = []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            if (state.length === 0) {
                state.push(action.item)
            } else {
                if (!state.find(item => item.id === action.item.id )) {
                    state.push(action.item)
                }
            }
            return state;
        case types.REMOVE_ITEM_CART:
            state = state.filter(el => el.id !== action.item.id)
            console.log(state);
            return state
        default:
            return state
    }
}
