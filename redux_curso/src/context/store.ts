import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user/slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type storeState = ReturnType<typeof store.getState>;
