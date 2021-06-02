const createEmptyCells = () => {
  let cells = [];
  for (let x = 0; x < 10; x++) {
    let row = [];
    for (let y = 0; y < 10; y++) {
      row.push(false);
    }
    cells.push(row);
  }
  return cells;
};

export default class GameOfLife {
  constructor(cells) {
    this.cells = cells;
  }

  getCells() {
    return this.cells;
  }

  step() {
    let oldCells = this.cells;
    let newCells = createEmptyCells();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        let isAlive = oldCells[x][y];
        let liveNeighbors = this.liveNeighbors(x, y);
        if ((isAlive && liveNeighbors === 2) || liveNeighbors === 3) {
          newCells[x][y] = true;
        }
      }
    }
    this.cells = newCells;
  }

  liveNeighbors(x, y) {
    let count = 0;
    if (x > 0 && y > 0 && this.cells[x - 1][y - 1]) count++;
    if (y > 0 && this.cells[x][y - 1]) count++;
    if (x < 9 && y > 0 && this.cells[x + 1][y - 1]) count++;
    if (x > 0 && this.cells[x - 1][y]) count++;
    if (x < 9 && this.cells[x + 1][y]) count++;
    if (x > 0 && y < 9 && this.cells[x - 1][y + 1]) count++;
    if (y < 9 && this.cells[x][y + 1]) count++;
    if (x < 9 && y < 9 && this.cells[x + 1][y + 1]) count++;
    return count;
  }
}
