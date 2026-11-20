import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";

import { createSagaMiddleware } from "redux-saga";
import { fetchUsersWatcher } from "./user/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userSlice,
  },

  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(fetchUsersWatcher);
export type storeState = ReturnType<typeof store.getState>;
