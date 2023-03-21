import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";

export const GameButton = ({ name, img, background }) => {
  const { userPick, setUserPick } = useContext(AppContext);
  return (
    <button
      disabled={userPick ? true : false}
      onClick={() => {
        console.log(name);
        setUserPick(name);
      }}
      style={{
        background: background,
      }}
      className="w-full h-full rounded-full flex items-center justify-center"
    >
      <div className="bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center shadow-inner">
        <img
          src={img}
          alt={`icon-${name}-svg`}
          className={"scale-90 lg:scale-100 lg:w-1/2 lg:h-1/2 "}
        />
      </div>
    </button>
  );
};
