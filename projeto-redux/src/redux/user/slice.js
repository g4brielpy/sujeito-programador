import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    name: "Gabriel",
    email: "gabriel@teste.com",
    address: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createrUser: (state, action) => {
      console.log(action);

      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    },
  },
});

export const { createrUser } = userSlice.actions;
export default userSlice.reducer;
