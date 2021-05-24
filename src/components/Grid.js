import React, { Component } from 'react';
import './grid.css';

export const transformGrid = (grid) => {
  if (grid.length === 0) return [];
  const width = grid.length;
  const height = grid[0].length;
  let newGrid = [];
  for (let y = 0; y < height; y++) {
    let subs = [];
    for (let x = 0; x < width; x++) {
      subs.push(grid[x][y]);
    }
    newGrid.push(subs);
  }
  return newGrid;
};

export default class Grid extends Component {
  render() {
    const liveCells = 'green';
    const deadCells = 'gray';

    let transCells = transformGrid(this.props.cells);

    let cells = transCells.flat().map((isAlive, index) => {
      const x = index % 10;
      const y = Math.floor(index / 10);
      const onCellClick = () => {
        this.props.callback(x, y);
      };

      if (isAlive)
        return (
          <div
            onClick={onCellClick}
            style={{ background: liveCells }}
            className='cube'
          ></div>
        );
      else
        return (
          <div
            onClick={onCellClick}
            style={{ background: deadCells }}
            className='cube'
          ></div>
        );
    });

    // let cells = [];
    // for(let i = 0; i < 100; i++) {
    //   if(i % 2 === 0) {
    //     cells.push((<div style={{background:liveCells}} className="cube"></div>))
    //   } else {
    //     cells.push((<div style={{background:deadCells}} className="cube"></div>))
    //   }

    // }

    return (
      <div>
        <div className='grid'>{cells}</div>
      </div>
    );
  }
}
