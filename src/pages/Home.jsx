import React from "react";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className="flex w-full h-full overflow-y-scroll flex-col">
      <CreatePost />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Home;
