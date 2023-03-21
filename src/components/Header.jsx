import React, { useContext } from "react";
import logo from "../assets/images/logo.svg";
import { AppContext } from "./../context/AppContext";

const Header = () => {
  const { score } = useContext(AppContext);
  return (
    <header className="w-full p-3 lg:p-5 border-2 border-header-outline rounded-md flex items-center justify-between">
      <img className="w-[100px] h-full xl:w-[130px] " src={logo} alt="logo" />
      <div className="flex flex-col items-center bg-white rounded-md px-4 py-2">
        <span className="text-sm lg:text-base text-score-text tracking-wider ">
          score
        </span>
        <p className="text-3xl text-dark-text font-bold">{score}</p>
      </div>
    </header>
  );
};

export default Header;
