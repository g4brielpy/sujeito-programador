import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from "./slice";
import { takeLatest, call, put } from "redux-saga/effects";

// URL API: https://jsonplaceholder.typicode.com/users

function* fetchUsersSaga() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = yield call([response, response.json]);

    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchUser() {
  yield takeLatest(fetchUsers.type, fetchUsersSaga);
}
