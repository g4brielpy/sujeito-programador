import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";

import type { AxiosResponse } from "axios";
import type { UsersProps } from "./slice";

import { fetchUsersRequest, fetchUsersSuccesses } from "./slice";
import axios from "axios";

function* fetchUsersWorker(): SagaIterator {
  const result: AxiosResponse<UsersProps[]> = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users/",
  );

  yield put(fetchUsersSuccesses(result.data));
}

export function* fetchUsersWatcher(): SagaIterator {
  yield takeLatest(fetchUsersRequest.type, fetchUsersWorker);
}
