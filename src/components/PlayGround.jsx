import { useContext, useEffect } from "react";

import Choice from "./Choice";
import { Picker } from "./Picker";
import { AppContext } from "./../context/AppContext";
import { rpsData } from "./../assets/rpsData/data";
import { motion } from "framer-motion";

const PlayGround = () => {
  const {
    userPick,
    computerPick,
    setComputerPick,
    CheckWinner,
    result,
    resetPicks,
  } = useContext(AppContext);

  useEffect(() => {
    if (userPick) {
      setTimeout(() => {
        let randomPick = rpsData[Math.floor(Math.random() * rpsData.length)];
        setComputerPick(randomPick);
      }, 7000);
    }
  }, [userPick]);

  useEffect(() => {
    if (userPick && computerPick) {
      CheckWinner();
    }
  }, [userPick, computerPick]);

  return (
    <main className=" w-full flex items-center justify-center    ">
      <div className={`relative w-[65%] md:w-[55%] lg:w-[46%]`}>
        <Choice />
        <Picker />

        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex w-full flex-col items-center absolute top-[80%]  left-[50%] -translate-x-1/2 "
          >
            <p className="text-white  uppercase tracking-wider text-4xl md:text-5xl font-bold">
              {`${(() => {
                switch (result) {
                  case "win":
                    return "You win";

                  case "lose":
                    return "You lose";

                  default:
                    return "It's A Draw";
                }
              })()}`}
            </p>
            <button
              onClick={() => resetPicks()}
              className="bg-white uppercase text-sm lg:text-base tracking-widest text-dark-text rounded-md px-10 py-2 mt-5"
            >
              play again
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default PlayGround;
