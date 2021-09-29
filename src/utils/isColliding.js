// matrix to check if there is colission for pawn pieces
// piece - coords of the piece that is about to change the position - array of 2 numbers (x, y)
// destination - coords of the destination tale - array of 2 numbers (x, y)
const isCollidng = (matrix, piece, destination) => {
  const [pX, pY] = piece;
  const [dX, dY] = destination;

  // check collistion only for pawns
  if (matrix[pX][pY] === 1 || matrix[pX][pY] === "x") {
    // check collision vertically
    if (pY === dY) {
      if (pX > dX) {
        for (let i = pX - 1; i > dX; i--) {
          if (matrix[i][pY] === "x" || matrix[i][pY] === 1) {
            return true;
          }
        }
      }
      if (pX < dX) {
        for (let i = pX + 1; i < dX; i++) {
          if (matrix[i][pY] === "x" || matrix[i][pY] === 1) {
            return true;
          }
        }
      }
    }

    // check collision horizontaly
    if (pX === dX) {
      if (pY > dY) {
        for (let i = pY - 1; i > dY; i--) {
          if (matrix[pX][i] === "x" || matrix[pX][i] === 1) {
            return true;
          }
        }
      }
      if (pY < dY) {
        for (let i = pY + 1; i < dY; i++) {
          if (matrix[pX][i] === "x" || matrix[pX][i] === 1) {
            return true;
          }
        }
      }
    }
  }
};

export default isCollidng;
