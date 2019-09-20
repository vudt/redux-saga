import { call, put, select, take, takeEvery, takeLatest, retry } from 'redux-saga/effects';
import * as types from './constants/ActionType';
import { getUsers, getUser, getAccount } from './api/users';
import { getProducts } from './api/products';
import { getPostByUser } from './api/posts';

function* fetchPostByUser(action) {
    try {
        yield take(types.FETCHING_ACCOUNT_SUCCESS)
        const accountInfo = yield select(state => state.account) 
        const data = yield getPostByUser(accountInfo.id)
        yield put({ type: types.FETCHING_POST_BY_USER_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_POST_BY_USER_FAIL, isFetching: true })
    }
}

function* fetchAccount(action) {
    try {
        const data = yield getAccount(action.id);
        yield put({ type: types.FETCHING_ACCOUNT_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_ACCOUNT_FAIL, isFetching: true })
    }
}

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
        yield put({ type: types.FETCHING_USER_FAIL, isFetching: true })
    }
}

function* userSaga() {
    yield takeLatest(types.FETCHING_LIST_PRODUCTS, fetchProducts)
    yield takeLatest(types.FETCHING_LIST_USERS, fetchUsers)
    yield takeLatest(types.FETCHING_USER, fetchUserDetail)
    yield takeLatest(types.FETCHING_ACCOUNT, fetchAccount)
    yield takeLatest(types.FETCHING_POST_BY_USER, fetchPostByUser)
}

export default userSaga;