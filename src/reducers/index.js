import { combineReducers } from 'redux';
import Authentication from './authentication';
import Users from './users';

const appReducers = combineReducers({
    users: Users,
    authentication: Authentication
});

export default appReducers;