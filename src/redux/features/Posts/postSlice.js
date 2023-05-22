import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../http";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk("user/fetchPosts", () => {
  return http.get("/posts").then((response) => response.data);
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
