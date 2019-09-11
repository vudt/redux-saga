import * as types from '../constants/ActionType';

export default (state = [], action) => {
    switch (action.type) {
        case types.FETCHING_LIST_POSTS_SUCCESS:
            return action.data;
        case types.FETCHING_LIST_POSTS_FAIL:
            return state;
        default:
            return state;
    }
}