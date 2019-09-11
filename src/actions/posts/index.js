import * as types from '../../constants/ActionType';

export const fetchListPosts = (page) => {
    return { type: types.FETCHING_LIST_PRODUCTS, page }
}