import React from "react";
import CreatePost from "../components/CreatePost";

const Home = () => {
  return (
    <div className="flex w-full h-full overflow-y-scroll">
      <CreatePost />
    </div>
  );
};

export default Home;
