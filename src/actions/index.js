import * as types from '../constants/ActionType';

export const fetchListProducts = (page) => {
    return { type: types.FETCHING_LIST_PRODUCTS, page }
}

export const fetchListUsers = (page) => {
    return { type: types.FETCHING_LIST_USERS, page }
}

export const fetchUser = (id) => {
    return { type: types.FETCHING_USER, id}
}

export const actToggleModal = (status) => {
    return { type: types.TOGGLE_MODAL, status: status }
}

export const actAddToCart = (item) => {
    return { type: types.ADD_TO_CART, item }
}

export const actUpdateCart = (item) => {
    return { type: types.UPDATE_CART, item }
}

export const actRemoveItem = (item) => {
    return { type: types.REMOVE_ITEM_CART, item }
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
