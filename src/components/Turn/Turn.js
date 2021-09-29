import React, { useContext } from "react";
import "./Turn.css";
import GameContext from "../../context/gameContext";

const Turn = () => {
  const gameContext = useContext(GameContext);
  const { playerTurn } = gameContext;

  return (
    <div className="player-turn">
      Player <span className="player-turn__count">{playerTurn}</span> turn
    </div>
  );
};

export default Turn;
