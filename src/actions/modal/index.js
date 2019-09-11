import * as types from '../../constants/ActionType';

export const actToggleModal = (status) => {
    return { type: types.TOGGLE_MODAL, status: status }
}