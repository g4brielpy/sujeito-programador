import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducer";

import createSagaMiddleware from "redux-saga";
import { watchUser } from "./user/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchUser);
