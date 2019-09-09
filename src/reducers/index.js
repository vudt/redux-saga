import { combineReducers } from 'redux';
import Authentication from './authentication';
import Users from './users';
import UserDetail from './user';

export const showModal = (state = false, action) => {
    if (action.type === 'TOGGLE_MODAL') {
        state = !state
    }
    return state;
}

const appReducers = combineReducers({
    users: Users,
    user: UserDetail,
    authentication: Authentication,
    showModal
});

export default appReducers;