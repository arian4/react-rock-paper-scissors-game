import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";

import { motion } from "framer-motion";
import { GameButton } from "./GameButton";

export const Picker = () => {
  const { userPick, computerPick, result } = useContext(AppContext);

  return (
    <>
      {userPick && !computerPick && (
        <motion.div
          key={"loading"}
          initial={{
            transform: "translate(-50%, -50%) scale(0)",
            top: `${matchMedia("(min-width: 640px)").matches ? "25%" : "5%"}`,
          }}
          animate={{
            transform: `translate(-50%, -50%)`,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]  rounded-full bg-[#141539] absolute top-[5%] left-[90%] animate-pulse "
        ></motion.div>
      )}

      {userPick && computerPick && (
        <motion.div
          key={"computerPick"}
          initial={{
            transform: "translate(-50%, -50%) scale(0)",
            top: `${matchMedia("(min-width: 640px)").matches ? "25%" : "5%"}`,
          }}
          animate={{
            transform: `translate(-50%, -50%)`,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]   rounded-full absolute  left-[90%] ${
            result === "lose" ? "shadow-winner-shadow" : null
          }`}
        >
          <GameButton
            name={computerPick.name}
            img={computerPick.img}
            background={computerPick.background}
          />
          {computerPick && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" w-full  whitespace-nowrap	 text-sm sm:text-base lg:text-lg  text-center text-white  uppercase tracking-wider absolute top-[125%] left-[50%] -translate-x-1/2  "
            >
              The house picked
            </motion.p>
          )}
        </motion.div>
      )}
    </>
  );
};
