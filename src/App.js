import './App.css';
import Grid from './components/Grid';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    let cells = [];
    for (let x = 0; x < 10; x++) {
      let row = [];
      for (let y = 0; y < 10; y++) {
        row.push(false);
      }
      cells.push(row);
    }

    this.state = {
      cells,
    };
  }

  render() {
    return (
      <div>
        <Grid
          cells={this.state.cells}
          callback={(x, y) => {
            console.log(x, y);
            const copy = this.state.cells.map((arr) => arr.slice());
            console.log(copy);
            copy[x][y] = !copy[x][y];
            this.setState({
              cells: copy,
            });
          }}
        />
      </div>
    );
  }
}
