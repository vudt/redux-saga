import * as types from '../constants/ActionType';

export default (state = [], action) => {
    switch (action.type) {
        case types.FETCHING_LIST_USERS_SUCCESS:
            return action.data;
        case types.FETCHING_LIST_USERS_FAIL:
            return state;
        default:
            return { ...state };
    }
}