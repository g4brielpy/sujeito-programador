import { fetchUsers } from "./slice";
import { takeLatest } from "redux-saga/effects";

function* fetchUsersSaga(action) {
  console.log("Fetch Saga " + action.payload);
}

export function* watchUser() {
  yield takeLatest(fetchUsers.type, fetchUsersSaga);
}
