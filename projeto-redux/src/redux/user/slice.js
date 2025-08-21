import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  loading: false,
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

    fetchUsers: (state) => {
      state.loading = true;
    },

    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      console.error(action.payload);
    },
  },
});

export const {
  createrUser,
  logoutUser,
  addAddress,
  delAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} = userSlice.actions;
export default userSlice.reducer;
