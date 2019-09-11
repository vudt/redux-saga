import * as types from '../../constants/ActionType';

export const actAddToCart = (item) => {
    return { type: types.ADD_TO_CART, item }
}

export const actUpdateCart = (item) => {
    return { type: types.UPDATE_CART, item }
}

export const actRemoveItem = (item) => {
    return { type: types.REMOVE_ITEM_CART, item }
}