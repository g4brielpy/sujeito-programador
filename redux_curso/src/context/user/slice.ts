import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface userProps {
  name: string;
  email: string;
  endereco: string;
}
interface UserState {
  user: userProps;
  users: UsersProps[];
}

const initialState: UserState = {
  user: {
    name: "Gabriel",
    email: "gabriel@email.com",
    endereco: "Rua A, 100 - Belo Horizonte",
  },
  users: [],
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

    fetchUsersSuccesses(state, action: PayloadAction<UsersProps[]>) {
      console.log(action.payload);
      state.users = action.payload;
    },
  },
});

export const { login, setEndereco, fetchUsersRequest, fetchUsersSuccesses } =
  userSlice.actions;
export default userSlice.reducer;
