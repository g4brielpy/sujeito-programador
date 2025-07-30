import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createrUser: (state, action) => {
      const { name, email } = action.payload;
      state.user.name = name;
      state.user.email = email;
    },

    addAddress: (state, action) => {
      const { newAddress } = action.action;
      state.user.address = newAddress;
    },
  },
});

export const { createrUser } = userSlice.actions;
export default userSlice.reducer;
