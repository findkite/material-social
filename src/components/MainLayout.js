import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import { Container, Typography } from "@mui/material";
import CopyRight from "./CopyRight";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/Users/usersSlice";
import { fetchPosts } from "../redux/features/Posts/postSlice";
function MainLayout() {
  const user = useSelector((state) => state.local);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const promise = dispatch(fetchUsers());
    const promise1 = dispatch(fetchPosts());

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
      promise1.abort();
    };
  }, [dispatch]);
  return (
    <>
      <TopNav />
      <div className="main">
        <Container maxWidth="md">
          <Typography component="h1" variant="h4" align="center" sx={{ mt: 3 }}>
            welcome back {user.user.first_name} {user.user.last_name}
          </Typography>

          {user.isAuth ? <Outlet /> : <Navigate to="/login" />}
        </Container>
      </div>

      <CopyRight />
    </>
  );
}

export default MainLayout;
