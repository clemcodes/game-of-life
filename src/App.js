import './App.css';
import Grid from './components/Grid'
import React, { Component } from 'react'

export default class App extends Component {
  render() {

    let cells = [];
    for(let x = 0; x < 10; x++) {
      let row = [];
      for(let y = 0; y < 10; y++) {
        row.push(false);
      }
      cells.push(row)
    }

    return (
      <div>
        <Grid cells={cells} />
      </div>
    )
  }
}