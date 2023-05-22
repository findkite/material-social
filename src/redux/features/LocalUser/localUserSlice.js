import { createSlice } from "@reduxjs/toolkit";
const LocalUserList = localStorage.getItem("LocalUserList")
  ? JSON.parse(localStorage.getItem("LocalUserList"))
  : [];
const User = localStorage.getItem("User")
  ? JSON.parse(localStorage.getItem("User"))
  : null;
const isToken = localStorage.getItem("token") ? true : false;
const Token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const initialState = {
  users: LocalUserList,
  user: User,
  isAuth: isToken,
  token: Token,
};

export const localUserSlice = createSlice({
  name: "local-user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      const users = state.users.filter((user) => user.id !== action.payload.id);
      state.users = users;
      state.users.push(action.payload);
      state.user = action.payload;
      localStorage.setItem("LocalUserList", JSON.stringify(state.users));
      localStorage.setItem("User", JSON.stringify(state.user));
    },
    deleteFromUser: (state, action) => {
      const users = state.users.filter((user) => user.id !== action.payload);
      state.users = users;
      if (state.users.length === 0) {
        localStorage.removeItem("LocalUserList");
        state.user = null;
        localStorage.removeItem("User");
      } else {
        localStorage.setItem("LocalUserList", JSON.stringify(state.users));
      }
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("User", JSON.stringify(state.user));
    },
    deleteUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("User");
    },
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUser,
  deleteFromUser,
  deleteUser,
  updateUser,
  login,
  logout,
} = localUserSlice.actions;

export default localUserSlice.reducer;
