import { createContext } from "react";

const context = createContext({
  selectedPiece: [],
  matrix: [],
  selectPiece: () => {},
  movePiece: () => {},
});

export default context;
