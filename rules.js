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
        // Any live cell with two or three live neighbors survives.
        if (liveNeighbors === 2 || liveNeighbors === 3) {
            return true;
        } else {
            // All other live cells die in the next generation.
            return false;
        }
    } else {
        // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if (liveNeighbors === 3) {
            return true;
        } else {
            // All other dead cells stay dead.
            return false;
        }
    }

}
