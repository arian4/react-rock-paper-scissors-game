import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

export const rpsData = [
  {
    name: "paper",
    img: paper,
    background:
      "linear-gradient(to top ,hsl(230, 89%, 62%),hsl(230, 89%, 65%))",
    top: "10%",
    left: "10%",
  },
  {
    name: "scissors",
    img: scissors,
    background: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    top: "10%",
    left: "90%",
  },
  {
    name: "rock",
    img: rock,
    background:
      "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    top: "90%",
    left: "50%",
  },
];
