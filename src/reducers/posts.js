import * as types from '../constants/ActionType';

export const PostsByUsers = (state = [], action) => {
    switch (action.type) {
        case types.FETCHING_POST_BY_USER_SUCCESS: 
            return action.data
        default:
            return state;
    }
}


// export default (state = [], action) => {
//     switch (action.type) {
//         case types.FETCHING_LIST_POSTS_SUCCESS:
//             return action.data;
//         case types.FETCHING_LIST_POSTS_FAIL:
//             return state;
//         default:
//             return state;
//     }
// }