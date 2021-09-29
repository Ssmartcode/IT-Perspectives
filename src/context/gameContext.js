import { createContext } from "react";

const context = createContext({
  selectedPiece: [],
  matrix: [],
  selectPiece: () => {},
  movePiece: () => {},
  restart: () => {},
});

export default context;
