/* eslint-disable no-unused-expressions */
import { transformGrid } from './Grid';
import chai from 'chai';

const expect = chai.expect;

describe('transform grid', () => {
  it('if passed empty array, return empty array', () => {
    expect(transformGrid([])).to.be.empty;
  });
  it('if passed multi-dimensional array, return empty array', () => {
    const input = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    const expected = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    console.log(input[1][2]);
    expect(transformGrid(input)).to.deep.equal(expected);
  });
});
