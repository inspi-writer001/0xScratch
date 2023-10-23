import React from "react";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const PostHead = ({
  profilePicture,
  username,
  timeAgo,
  walletAddress,
  price,
  donations
}) => {
  return (
    <div className="flex flex-row overflow-x-hidden">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                Sonali Hirave
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @ShonaDesign . 16 April
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PostHead;
