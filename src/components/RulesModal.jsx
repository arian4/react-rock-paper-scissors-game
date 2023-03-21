import React, { useContext } from "react";
import rulesImg from "../assets/images/image-rules.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { motion } from "framer-motion";
import { AppContext } from "./../context/AppContext";

export const RulesModal = () => {
  const { isRulesModalOpen, setIsRulesModalOpen } = useContext(AppContext);
  return (
    <>
      {/* MODAL FOR MOBILE DESIGN */}
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={isRulesModalOpen ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-around bg-white absolute inset-0 z-50 lg:hidden"
      >
        <h3 className="uppercase text-3xl text-dark-text font-bold">Rules</h3>
        <img src={rulesImg} alt="image-rules" />
        <button onClick={() => setIsRulesModalOpen(false)}>
          <img src={closeIcon} alt="icon-close" />
        </button>
      </motion.div>
      {/* MODAL FOR Desktop DESIGN */}
      <motion.div
        initial={{ opacity: 0, zIndex: "-100" }}
        animate={
          isRulesModalOpen ? { opacity: 1, zIndex: "50" } : { opacity: 0 }
        }
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-light-box hidden lg:block"
      >
        <div className="bg-white rounded-md p-5 w-[40%] flex flex-col items-center justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between w-full">
            <h3 className="uppercase text-3xl text-dark-text font-bold">
              Rules
            </h3>
            <button onClick={() => setIsRulesModalOpen(false)}>
              <img src={closeIcon} alt="icon-close" />
            </button>
          </div>
          <img src={rulesImg} alt="image-rules" className="mt-10" />
        </div>
      </motion.div>
    </>
  );
};
