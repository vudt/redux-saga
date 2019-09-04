import * as types from '../constants/ActionType';

export const fetchListUsers = () => {
    return { type: types.FETCHING_LIST_USERS }
}

export const actLogin = (email, password) => {
    return {
        type: types.USER_LOGIN,
        payload: { email, password }
    }
}

export const actLogout = () => {
    return { type: types.USER_LOGOUT }
}
