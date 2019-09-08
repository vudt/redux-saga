import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './constants/ActionType';
import { getUsers, getUser } from './api/users';

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
        const data = yield getUser(action.id);
        yield put({ type: types.FETCHING_USER_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_USER_FAIL })
    }
}

function* userSaga() {
    yield takeEvery(types.FETCHING_LIST_USERS, fetchUsers)
    yield takeEvery(types.FETCHING_USER, fetchUserDetail)
}

export default userSaga;