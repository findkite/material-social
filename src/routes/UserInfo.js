import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../redux/features/Users/usersSlice";
import ProfileUserInfo from "../components/ProfileUserInfo";

export default function UserInfo() {
  let { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const promise = dispatch(fetchUserById(id));

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, [dispatch, id]);

  return <div>{id ? <Outlet /> : <ProfileUserInfo />}</div>;
}
