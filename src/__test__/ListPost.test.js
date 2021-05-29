import React from 'react';
import renderer from 'react-test-renderer';
import ListPosts from '../Components/PostsComponents/ListPosts';

test('List Snapshot test', () => {
  const component = renderer.create(
    <ListPosts/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});