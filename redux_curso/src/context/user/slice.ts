import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Gabriel",
    email: "gabriel@email.com",
    endereco: "Rua A, 100 - Belo Horizonte",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user.email = action.payload?.email;
      state.user.name = action.payload?.name;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
