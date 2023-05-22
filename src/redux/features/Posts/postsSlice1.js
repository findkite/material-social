import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostsDataService from "../../../services/postsService";
const initialState = [];

export const createPost = createAsyncThunk(
  "posts/create",
  async ({ title, description }) => {
    const res = await PostsDataService.create({ title, description });
    return res.data;
  }
);

export const retrievePosts = createAsyncThunk(
  "posts/All",
  async () => {
    const res = await PostsDataService.getAll();
    return res.data;
  }
);

export const updatePosts = createAsyncThunk(
  "posts/update",
  async ({ id, data }) => {
    const res = await PostsDataService.update(id, data);
    return res.data;
  }
);

export const deleteTutorial = createAsyncThunk(
  "posts/delete",
  async ({ id }) => {
    await PostsDataService.remove(id);
    return { id };
  }
);

export const deleteAllPosts = createAsyncThunk("posts/deleteAll", async () => {
  const res = await PostsDataService.removeAll();
  return res.data;
});

export const findPostsByTitle = createAsyncThunk(
  "posts/findByTitle",
  async ({ title }) => {
    const res = await PostsDataService.findByTitle(title);
    return res.data;
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [createPost.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrievePosts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updatePosts.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (tutorial) => tutorial.id === action.payload.id
      );
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteAllPosts.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllPosts.fulfilled]: (state, action) => {
      return [];
    },
    [findPostsByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = postsSlice;
export default reducer;
