import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  House,
  Gift,
  PatchCheck,
  Envelope,
  Bell,
  FilePerson,
  Wallet2,
  Lightning
} from "react-bootstrap-icons";
import Logo from "../assets/scratch.png";
import profilePicture from "../assets/72.png";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
import Airdrop from "../pages/Airdrop";
import Profile from "../pages/Profile";

const white = "__white";
// bg-gray-800
const Navbarr = () => {
  return (
    <div class="h-screen w-full absolute flex overflow-hidden">
      <aside
        class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative
     
       bg-[#080707]
        text-white"
      >
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <Link to="/profile">
            <div className="__logo">
              <img src={Logo} alt="0xscratch_logo" />
            </div>
          </Link>
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white ">
          <Link to="/home">
            <House />
          </Link>
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <Link to="/airdrop">
            <Gift />
          </Link>
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <PatchCheck />
        </div>
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white ">
          <Envelope />
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <Bell />
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <FilePerson />
        </div>

        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <Wallet2 />
        </div>
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <Lightning />
        </div>
      </aside>

      <div class="w-full h-full flex flex-col justify-between">
        <header class="md:h-16 h-[8dvh] w-full flex items-center relative justify-end px-5 space-x-10 bg-[#080707]">
          <div class="flex flex-shrink-0 items-center space-x-4 text-white">
            <div class="flex flex-col items-end ">
              <div class="text-md font-medium ">0x....d6e</div>

              <div class="text-sm font-regular">🤘rock!!</div>
            </div>

            <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400">
              <img src={profilePicture} alt="profile__picture" />
            </div>
          </div>
        </header>

        <main class="max-w-full h-full flex relative overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/navbar" element={<Navbarr />} /> */}
          </Routes>

          {/* <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll text-white ">
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              a
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              b
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              c
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              d
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              e
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              f
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              g
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              h
            </div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">
              i
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Navbarr;
