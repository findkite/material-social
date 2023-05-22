import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/Users/usersSlice";
import postReducer from "./features/Posts/postSlice";
import localUserReducer from "./features/LocalUser/localUserSlice";

const reducer = {
  post: postReducer,
  local: localUserReducer,
  user: userReducer,
};
export const store = configureStore({
  reducer: reducer,
});
