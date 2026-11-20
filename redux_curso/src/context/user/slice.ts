import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    login(state, action: PayloadAction<{ email: string; name: string }>) {
      state.user.email = action.payload?.email;
      state.user.name = action.payload?.name;
    },

    setEndereco(state, action: PayloadAction<string>) {
      state.user.endereco = action.payload;
    },

    fetchUsersRequest() {},
  },
});

export const { login, setEndereco, fetchUsersRequest } = userSlice.actions;
export default userSlice.reducer;
