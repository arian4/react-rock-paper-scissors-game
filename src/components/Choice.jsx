import React, { useContext } from "react";
import triangle from "../assets/images/bg-triangle.svg";
import { rpsData } from "../assets/rpsData/data";

import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "./../context/AppContext";
import { GameButton } from "./GameButton";

const Choice = () => {
  const { userPick, result } = useContext(AppContext);

  const options = userPick
    ? rpsData.filter((option) => option.name === userPick)
    : rpsData;

  return (
    <>
      <img
        src={triangle}
        alt="bg-triangle"
        className={`w-full ${userPick ? "invisible" : "block"} `}
      />
      <AnimatePresence>
        {options.map((option) => (
          <motion.div
            key={option.name}
            style={{
              top: option.top,
              left: option.left,
            }}
            animate={
              userPick === option.name
                ? {
                    transform: `translate(-50%, -50%) scale(1)`,
                    top: `${
                      matchMedia("(min-width: 640px)").matches ? "25%" : "5%"
                    }`,
                    left: "10%",
                  }
                : {}
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full  absolute scale-[0.85] sm:scale-100 ${
              result === "win" ? "shadow-winner-shadow" : null
            } `}
          >
            <GameButton
              name={option.name}
              img={option.img}
              background={option.background}
            />
            {userPick && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // transition={{ delay: 1 }}
                className=" w-full text-sm sm:text-base lg:text-lg text-white text-center uppercase tracking-widest absolute top-[125%] left-[50%] -translate-x-[50%]"
              >
                You Picked
              </motion.p>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default Choice;
