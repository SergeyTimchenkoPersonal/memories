import React from "react";
import Post from "./Post/Post.js";

import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;