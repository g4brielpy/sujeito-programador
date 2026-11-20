import { call, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";

import { fetchUsersRequest } from "./slice";
import axios from "axios";

function* fetchUsersWorker(): SagaIterator {
  const result = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users/",
  );

  console.log(result);
}

export function* fetchUsersWatcher(): SagaIterator {
  yield takeLatest(fetchUsersRequest.type, fetchUsersWorker);
}
