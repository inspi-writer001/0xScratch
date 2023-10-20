import React from "react";
import scratch from "../assets/scratch.png";
import { useEffect, useState } from "react";

// div that has its text color rgb(176,221,254) in tailwindcss react?
// <div className="text-blue-200"></div>

const Welcome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return loading === false ? (
    <div>
      <div className="__containing__div__welcome flex flex-col w-80 h-96 max-h-80 bg-[rgb(8, 7, 7)]">
        <div className="__typography__welcome text-center font-bold text-2xl text-blue-200 min-w-full">
          0xScratch
        </div>
        <img
          src={scratch}
          width="50%"
          alt="0xscratch_logo"
          className="__logo"
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
        <div className="__welcome__typography text-center  text-blue-200 min-w-full">
          Connect - Engage - Earn
        </div>
        <div className="__welcome__button flex justify-self-center flex-row justify-center">
          <button className="__styled_button text-blue-200 text-xl mt-4">
            Enter
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-200">
        <img src={scratch} alt="0xscratch_logo" />
      </div>
    </div>
  );
};

export default Welcome;
