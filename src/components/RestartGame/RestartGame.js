import React from "react";

import restartImg from "./restart.png";
import "./RestartGame.css";

const RestartGame = () => {
  return (
    <div className="restart-button">
      <img src={restartImg} alt="restart arrow" />
      <span>Restart</span>
    </div>
  );
};

export default RestartGame;
