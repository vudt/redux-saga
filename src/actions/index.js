import * as types from '../constants/ActionType';

export const fetchListUsers = (page) => {
    return { type: types.FETCHING_LIST_USERS, page }
}

export const fetchUser = (id) => {
    console.log(id)
    return { type: types.FETCHING_USER, id}
}

export const actToggleModal = (status) => {
    return { type: types.TOGGLE_MODAL, status: status }
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
