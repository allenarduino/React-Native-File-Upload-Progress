import React from 'react';
import renderer from 'react-test-renderer';
import { UploadButton } from '../src/components/UploadButton/UploadButton.js';

describe('<Upload Button />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<UploadButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly on the screen', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
