import React, { Component } from 'react';
import './grid.css';

export default class Grid extends Component {

  render() {
    const liveCells = 'green';
    const deadCells = 'gray';

    let cells = this.props.cells.flat().map(isAlive => {
      if(isAlive) return (<div style={{background:liveCells}} className="cube"></div>)
      else return (<div style={{background:deadCells}} className="cube"></div>)
    })

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
        <div className="grid">
          {cells}
        </div>
      </div>
    )
  }
}
