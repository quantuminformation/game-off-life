/**
 * @param {boolean} cellState - current state of the cell (alive or dead)
 * @param {boolean[]} neighbors - array of booleans representing the state of neighboring based on a left to right scan then top to bottom
 * @returns {boolean} - new state of the cell (alive or dead)
 */
export const checkCellLife= (cellState, neighbors) =>{
    const TOP_LEFT = neighbors[0];
    const TOP_MIDDLE   = neighbors[1];
    const TOP_RIGHT    = neighbors[2];
    const MIDDLE_LEFT  = neighbors[3];
    const MIDDLE_RIGHT = neighbors[4];
    const BOTTOM_LEFT  = neighbors[5];
    const BOTTOM_MIDDLE= neighbors[6];
    const BOTTOM_RIGHT = neighbors[7];
    const liveNeighbors = neighbors.filter(Boolean).length;

    if (cellState) {
      return liveNeighbors === 2 || liveNeighbors === 3
    } else {
      return liveNeighbors === 3
    }

}
