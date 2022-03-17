import React from 'react';
import renderer from 'react-test-renderer';
import { MyProgressBar } from '../src/components/ProgressBar/ProgressBar';

describe('< MyProgressBar/>', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<MyProgressBar />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly on the screen', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
