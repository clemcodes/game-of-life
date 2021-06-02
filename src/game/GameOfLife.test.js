/* eslint-disable no-unused-expressions */
import GameOfLife from './GameOfLife';
import chai from 'chai';

const expect = chai.expect;

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

describe('Game of life', () => {
  it('can create game of life', () => {
    const inputCells = createEmptyCells();
    const expectedCells = createEmptyCells();
    const game = new GameOfLife(inputCells);
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
  it('once it died, it stays dead', () => {
    const inputCells = createEmptyCells();
    const expectedCells = createEmptyCells();
    const game = new GameOfLife(inputCells);
    game.step();
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
  it('if one is alive, all dead after one step', () => {
    const inputCells = createEmptyCells();
    inputCells[2][0] = true;
    const expectedCells = createEmptyCells();
    const game = new GameOfLife(inputCells);
    game.step();
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
  it('if one has one neighbor, all dead after one step', () => {
    const inputCells = createEmptyCells();
    inputCells[2][0] = true;
    inputCells[3][0] = true;
    const expectedCells = createEmptyCells();
    const game = new GameOfLife(inputCells);
    game.step();
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
  it('if one has one neighbor, all dead after one step', () => {
    const inputCells = createEmptyCells();
    inputCells[2][0] = true;
    inputCells[3][0] = true;
    const expectedCells = createEmptyCells();
    const game = new GameOfLife(inputCells);
    game.step();
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
  it('if one has two neighbors, then survive', () => {
    const inputCells = createEmptyCells();
    inputCells[1][1] = true;
    inputCells[2][2] = true;
    inputCells[3][3] = true;
    const expectedCells = createEmptyCells();
    expectedCells[2][2] = true;
    const game = new GameOfLife(inputCells);
    game.step();
    expect(game.getCells()).to.deep.equal(expectedCells);
  });
});
