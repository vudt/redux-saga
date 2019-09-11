import * as types from '../../constants/ActionType';

export const fetchListUsers = (page) => {
    return { type: types.FETCHING_LIST_USERS, page }
}

export const fetchUser = (id) => {
    return { type: types.FETCHING_USER, id}
}