import { createContext } from "react";

const context = createContext({
  selectedPiece: [],
  playerTurn: null,
  matrix: [],
  selectPiece: () => {},
  movePiece: () => {},
  restart: () => {},
});

export default context;
