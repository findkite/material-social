import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../http";

const initialState = {
  loading: false,
  users: [],
  me: {
    loading: false,
    data: {},
    error: "",
  },
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return await http.get("user").then((response) => response.data);
});
export const fetchUserById = createAsyncThunk(
  "user/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await http.get(`user/${userId ? userId : "me"}`);
    return response.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const index = state.map((item) => item.id === action.payload.id);
      const updatedState = [...state];
      updatedState[index].status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.me.error = action.error.message;
    });

    builder.addCase(fetchUserById.pending, (state) => {
      state.me.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.me.loading = false;
      state.me.data = action.payload;
      state.me.error = "";
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.me.loading = false;
      state.me = [];
      state.me.error = action.error.message;
    });
  },
});
export const { updateStatus } = userSlice.actions;
export default userSlice.reducer;
