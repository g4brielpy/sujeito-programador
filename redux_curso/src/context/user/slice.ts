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
  reducers: {},
});
export default userSlice.reducer;
