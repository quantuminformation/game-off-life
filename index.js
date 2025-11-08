import {checkCellLife} from "./rules.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const cellSize = 20;
const padding = 2;

// canvas dimensions
const width = canvas.width;
const height = canvas.height;

// NEW: flip order — first rows, then columns
const rows = Math.floor(height / cellSize);
const cols = Math.floor(width / cellSize);

const cells = [];

// create cell grid (row-major order)
for (let row = 0; row < rows; row++) {
    cells[row] = [];
    for (let col = 0; col < cols; col++) {
        cells[row][col] = Math.random() > 0.5;
    }
}

// draw each cell
function drawGrid() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.fillStyle = cells[row][col] ? "green" : "white";

            ctx.fillRect(
                col * cellSize + padding,
                row * cellSize + padding,
                cellSize - padding * 2,
                cellSize - padding * 2
            );
        }
    }
}

/**
 * Gets the neighbors of a cell at (row, col), if at edges assumes dead cells
 * @param row
 * @param col
 */
const getNeighbors = (row, col) => {
    if(row < 0 || row >= rows || col < 0 || col >= cols) {
    const neighbors = [];

}

drawGrid();

// update loop (placeholder for your convolution logic)
setInterval(() => {
    const newCells = [];

    // compute newCells[row][col] based on neighbors
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const currentCell = cells[row][col];

            // check next cell state
            const nextCellState = checkCellLife(currentCell, getNeighbors(row, col));
        }
    }

    // replace old state
    // cells = newCells; <-- uncomment once logic is implemented

    drawGrid();
}, 1000);}
