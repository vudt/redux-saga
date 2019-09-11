import * as types from '../../constants/ActionType';

export const fetchListProducts = (page) => {
    return { type: types.FETCHING_LIST_PRODUCTS, page }
}