import { combineReducers } from 'redux';
import Authentication from './authentication';
import Users from './users';
import UserDetail from './user';
import {ListProducts} from './products';
import Cart from './cart';

export const showModal = (state = false, action) => {
    if (action.type === 'TOGGLE_MODAL') {
        state = !state
    }
    return state;
}

const appReducers = combineReducers({
    authentication: Authentication,
    users: Users,
    user: UserDetail,
    products: ListProducts,
    showModal,
    cart: Cart
});

export default appReducers;