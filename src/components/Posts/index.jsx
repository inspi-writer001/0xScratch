import React from "react";
import PostHead from "./PostHead";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Posts = () => {
  return (
    <div className=" md:w-3/5 flex flex-col">
      <PostHead />
      <PostBody />
      <PostFooter />
    </div>
  );
};

export default Posts;
