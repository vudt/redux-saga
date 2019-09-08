import { combineReducers } from 'redux';
import Authentication from './authentication';
import Users from './users';
import UserDetail from './user';

const appReducers = combineReducers({
    users: Users,
    user: UserDetail,
    authentication: Authentication
});

export default appReducers;