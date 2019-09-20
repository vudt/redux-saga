import * as types from '../constants/ActionType';

let defaultState = { data: null, isFetching: false, items: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_LIST_USERS_SUCCESS:
            return { data: action.data, isFetching: true };

            // let merge_array = [...state.items, ...action.data.data]
            // let users_array = [ ...new Set(merge_array) ]
            // const seen = new Set();
            // const filteredArr = users_array.filter(el => {
            //     const duplicate = seen.has(el.id);
            //     seen.add(el.id);
            //     return !duplicate;
            // });
            // return {
            //     ...state, 
            //     data: action.data,
            //     isFetching: true,
            //     items: filteredArr
            // }
        case types.FETCHING_LIST_USERS_FAIL:
            return state;
        default:
            return state;
    }
}