import { checkCellLife } from './rules.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

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
      // figureOut neighbour states

      ctx.fillStyle = cells[row][col] ? 'green' : 'white';

      const neighbors = getNeighborsArray(cells, row, col);

      checkCellLife(cells[row][col], neighbors);

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
const getNeighborsArray = (arr, row, col) => {
  // special case 0,0 cell
  if (row === 0 && col === 0) {
    const array = [
      false,
      false,
      false,
      false,
      arr[row][col + 1],
      false,
      arr[row + 1][col],
      arr[row + 1][col + 1],
    ];
  }

  if (row === 0 && col > 0 && col < col < arr[0].length - 1) {
    const array = [
      false,
      false,
      false,
      arr[row][col - 1],
      arr[row][col + 1],
      arr[row - 1][col - 1],
      arr[row + 1][col],
      arr[row + 1][col + 1],
    ];
  }
  if (row === 0 && col === arr[0].length - 1) {
    const array = [
      false,
      false,
      false,
      arr[row][col - 1],
      false,
      arr[row - 1][col - 1],
      arr[row + 1][col],
      false,
    ];
  }

  // now handle the bottom row
  if (row === arr.length - 1 && col === 0) {
    const array = [
      false,
      arr[row - 1][col],
      arr[row - 1][col + 1],
      false,
      arr[row][col + 1],
      false,
      false,
      false,
    ];
  }

  if (row === arr.length - 1 && col > 0 && col < arr[0].length - 1) {
    const array = [
      arr[row - 1][col - 1],
      arr[row - 1][col],
      arr[row - 1][col + 1],
      arr[row][col - 1],
      arr[row][col + 1],
      false,
      false,
      false,
    ];
  }

  if (row === arr.length - 1 && col === arr[0].length - 1) {
    const array = [
      arr[row - 1][col - 1],
      arr[row - 1][col],
      false,
      arr[row][col - 1],
      false,
      false,
      false,
      false,
    ];
  }

  // now handle left  edges (excluding corners)
  if (col === 0 && row > 0 && row < arr.length - 1) {
    const array = [
      false,
      arr[row - 1][col],
      arr[row - 1][col + 1],
      false,
      arr[row][col + 1],
      false,
      arr[row + 1][col],
      arr[row + 1][col + 1],
    ];
  }
  // now handle right edges (excluding corners)
  if (col === arr[0].length - 1 && row > 0 && row < arr.length - 1) {
    const array = [
      arr[row - 1][col - 1],
      arr[row - 1][col],
      false,
      arr[row][col - 1],
      false,
      arr[row + 1][col - 1],
      arr[row + 1][col],
      false,
    ];
  }

  // now handle all middle cells
  const array = [
    arr[row - 1][col - 1],
    arr[row - 1][col],
    arr[row - 1][col + 1],
    arr[row][col - 1],
    arr[row][col + 1],
    arr[row + 1][col - 1],
    arr[row + 1][col],
    arr[row + 1][col + 1],
  ];

  return array;
};

drawGrid();

// update loop (placeholder for your convolution logic)
setInterval(() => {
  const newCells = [];

  // compute newCells[row][col] based on neighbors
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentCell = cells[row][col];

      // check next cell state
      const nextCellState = checkCellLife(
        cells,
        currentCell,
        getNeighbors(row, col)
      );
    }
  }

  // replace old state
  // cells = newCells; <-- uncomment once logic is implemented

  drawGrid();
}, 1000);
