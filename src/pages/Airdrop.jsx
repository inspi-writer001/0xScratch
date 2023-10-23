import React from "react";

const Airdrop = () => {
  return (
    <div className="w-full flex flex-column">
      <div>
        <h1 className="text-3xl font-bold text-white">Airdrop Points</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0</h1>
            <p className="text-white">Total Points</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0</h1>
            <p className="text-white">Total Points</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0</h1>
            <p className="text-white">Total Points</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-white">0</h1>
          <p className="text-white">Total Points</p>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
