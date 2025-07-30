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
      state.user = {
        name: name,
        email: email,
      };
    },

    addAddress: (state, action) => {
      const { addressName, addressNumber } = action.payload;
      state.user = {
        ...state.user,
        address: {
          name: addressName,
          number: addressNumber,
        },
      };
    },
  },
});

export const { createrUser, addAddress } = userSlice.actions;
export default userSlice.reducer;
