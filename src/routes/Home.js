import React from "react";
import PostsList from "../components/PostsList";
import { UserView } from "../redux/features/Users/usersList";

function Home() {
  return (
    <div>
      <UserView />
      <PostsList />
    </div>
  );
}

export default Home;
