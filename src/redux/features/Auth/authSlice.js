import { createSlice } from "@reduxjs/toolkit";
const userList = localStorage.getItem("UserList")
  ? JSON.parse(localStorage.getItem("UserList"))
  : [];
const dUser = localStorage.getItem("defaultUser")
  ? JSON.parse(localStorage.getItem("defaultUser"))
  : null;
const isToken = localStorage.getItem("token") ? true : false;
const Token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const initialState = {
  users: userList,
  defaultUser: dUser,
  isAuth: isToken,
  token: Token,
};

export const authSlice = createSlice({
  name: "users",
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
      state.defaultUser = action.payload;
      localStorage.setItem("UserList", JSON.stringify(state.users));
      localStorage.setItem("defaultUser", JSON.stringify(state.defaultUser));
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      const users = state.users.filter((user) => user.id !== action.payload);
      state.users = users;
      if (state.users.length === 0) {
        localStorage.removeItem("UserList");
        state.defaultUser = null;
        localStorage.removeItem("defaultUser");
      } else {
        localStorage.setItem("UserList", JSON.stringify(state.users));
      }
    },
    deleteDefaultUser: (state, action) => {
      state.defaultUser = null;
      localStorage.removeItem("defaultUser");
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
export const { addUser, deleteUser, deleteDefaultUser, login, logout } =
  authSlice.actions;

export default authSlice.reducer;
