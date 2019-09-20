import { combineReducers } from 'redux';
import { Authentication, AccountInfo } from './authentication';
import Users from './users';
import UserDetail from './user';
import { ListProducts } from './products';
import { PostsByUsers } from './posts'; 
import Cart from './cart';

export const showModal = (state = false, action) => {
    if (action.type === 'TOGGLE_MODAL') {
        state = !state
    }
    return state;
}

const appReducers = combineReducers({
    authentication: Authentication,
    account: AccountInfo,
    users: Users,
    user: UserDetail,
    posts_by_users: PostsByUsers,
    products: ListProducts,
    showModal,
    cart: Cart
});

export default appReducers;