import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './constants/ActionType';
import getUsers from './api/users';

function* fetchUsers(action) {
    try {
        const data = yield getUsers();
        yield put({ type: types.FETCHING_LIST_USERS_SUCCESS, data })
    } catch (e) {
        yield put({ type: types.FETCHING_LIST_USERS_FAIL })
    }
}

function* userSaga() {
    yield takeEvery(types.FETCHING_LIST_USERS, fetchUsers)
}

export default userSaga;