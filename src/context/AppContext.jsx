import React, { useState } from "react";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [userPick, setUserPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const resetPicks = () => {
    setUserPick("");
    setComputerPick("");
    setResult("");
  };

  const CheckWinner = () => {
    if (userPick === computerPick.name) {
      setResult("draw");
    } else if (
      (userPick === "paper" && computerPick.name === "rock") ||
      (userPick === "scissors" && computerPick.name === "paper") ||
      (userPick === "rock" && computerPick.name === "scissors")
    ) {
      setResult("win");
      setScore((prev) => prev + 1);
    } else {
      setResult("lose");
      if (score > 0) {
        setScore((prev) => prev - 1);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        userPick,
        setUserPick,
        computerPick,
        setComputerPick,
        result,
        setResult,
        CheckWinner,
        score,
        resetPicks,
        isRulesModalOpen,
        setIsRulesModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
