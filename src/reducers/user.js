import * as types from '../constants/ActionType';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCHING_USER_SUCCESS:
            return {data: action.data, isFetching: true};
        case types.FETCHING_USER_FAIL:
            return state;
        default:
            return { ...state };
    }
}