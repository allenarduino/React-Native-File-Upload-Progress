import React from 'react';
import renderer from 'react-test-renderer';
import { SelectButton } from '../src/components/SelectButton/SelectButton';

describe('< Select Button />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<SelectButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly on the screen', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
