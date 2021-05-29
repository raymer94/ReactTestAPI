import React from 'react';
import renderer from 'react-test-renderer';
import ListCommentsPosts from '../Components/CommentsComponents/ListCommentsPosts';
import { BrowserRouter } from "react-router-dom";

test('ListComments Snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter>
      <ListCommentsPosts/>
    </BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});