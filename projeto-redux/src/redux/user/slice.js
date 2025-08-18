import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
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

    logoutUser: (state, action) => {
      state.user = null;
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

    delAddress: (state, action) => {
      state.user = {
        ...state.user,
        address: null,
      };
    },

    fetchUsers: (state, action) => {
      alert("Fetch users");
    },
  },
});

export const { createrUser, logoutUser, addAddress, delAddress, fetchUsers } =
  userSlice.actions;
export default userSlice.reducer;
