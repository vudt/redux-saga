import * as types from '../constants/ActionType';

export const ListProducts = (state = {}, action) => {
    switch (action.type) {
        case types.FETCHING_LIST_PRODUCTS_SUCCESS:
            return {data: action.data, isFetching: true};
        case types.FETCHING_LIST_PRODUCTS_FAIL:
            return state;
        default:
            return { ...state };
    }
}