import React from "react";
import { Lightning } from "react-bootstrap-icons";

const Airdrop = () => {
  return (
    <div className="w-full h-full flex gap-5 justify-center flex-col pl-5 pr-5">
      <div>
        <h1 className="text-3xl font-bold text-white text-center">
          Airdrop Points
        </h1>
      </div>
      <div className="flex flex-row text-center items-center text-sm justify-center text-white">
        $scratch Airdrop Points are calculated using your portfolio value,
        verified status, referrals, and your cummulative 0xScratch score
      </div>
      <div className="text-sm text-center text-white">
        Airdrop will commence in:
      </div>
      <div className="flex flex-row text-center items-center justify-center">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0:</h1>
            {/* <p className="text-white">Total Points</p> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0:</h1>
            {/* <p className="text-white">Total Points</p> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0:</h1>
            {/* <p className="text-white">Total Points</p> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">0</h1>
            {/* <p className="text-white">Total Points</p> */}
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="text-sm text-center text-white">
        0x....d6e current airdrop points:
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-300">0</h1>
        {/* <p className="text-white">Total Points</p> */}
      </div>
      <div className="text-gray-300 text-xs text-center flex flex-col items-center">
        <Lightning />
        <p> Airdrop will be October 20th, 2024</p> <br />
        <Lightning />
        <p>
          {" "}
          Engagement Rewards will be boosted for all launch epoch participants
          in perpetuity
        </p>{" "}
        <br />
        <Lightning />
        <p> 10% of total supply will be distributed</p>
      </div>
    </div>
  );
};

export default Airdrop;
