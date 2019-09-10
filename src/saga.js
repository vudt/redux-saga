import { call, put, takeEvery, takeLatest, retry } from 'redux-saga/effects';
import * as types from './constants/ActionType';
import { getUsers, getUser } from './api/users';
import { getProducts } from './api/products';

function* fetchProducts(action) {
    try {
        const data = yield getProducts(action.page);
        yield put({ type: types.FETCHING_LIST_PRODUCTS_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_LIST_PRODUCTS_FAIL })
    }
}

function* fetchUsers(action) {
    try {
        const data = yield getUsers(action.page);
        yield put({ type: types.FETCHING_LIST_USERS_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_LIST_USERS_FAIL })
    }
}

function* fetchUserDetail(action) {
    try {
        const result = yield getUser(action.id);
        yield put({ type: types.FETCHING_USER_SUCCESS, data: result.data, isFetching: true })
    } catch (e) {
        yield put({ type: types.FETCHING_USER_FAIL, isFetching: false })
    }
}

function* userSaga() {
    yield takeLatest(types.FETCHING_LIST_PRODUCTS, fetchProducts)
    yield takeLatest(types.FETCHING_LIST_USERS, fetchUsers)
    yield takeLatest(types.FETCHING_USER, fetchUserDetail)
}

export default userSaga;