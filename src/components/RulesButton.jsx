import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";

const RulesButton = () => {
  const { isRulesModalOpen, setIsRulesModalOpen } = useContext(AppContext);
  return (
    <button
      onClick={() => setIsRulesModalOpen((prev) => !prev)}
      className="bg-transparent md:absolute md:right-10 bottom-5 border border-white text-white rounded-md tracking-widest font-semibold px-8 py-1"
    >
      Rules
    </button>
  );
};

export default RulesButton;
