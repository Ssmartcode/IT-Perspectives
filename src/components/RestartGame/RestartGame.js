import React, { useContext } from "react";
import GameContext from "../../context/gameContext";

import restartImg from "./restart.png";
import "./RestartGame.css";

const RestartGame = () => {
  const gameContext = useContext(GameContext);

  const handleButtonClick = () => {
    gameContext.restart();
  };
  return (
    <div className="restart-button" onClick={handleButtonClick}>
      <img src={restartImg} alt="restart arrow" />
      <span>Restart</span>
    </div>
  );
};

export default RestartGame;
