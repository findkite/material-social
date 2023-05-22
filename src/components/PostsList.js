import * as React from "react";
import Media from "./Media";
import { useSelector } from "react-redux";

export default function PostsList() {
  const post = useSelector((state) => state.post);
  return (
    <div>
      {post.loading
        ? [...Array(3)].map((e, i) => <Media key={i} loading={post.loading} />)
        : post.posts &&
          post.posts.map((post, i) => (
            <Media key={i} loading={post.loading} post={post} />
          ))}
    </div>
  );
}
