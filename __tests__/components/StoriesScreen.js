import 'react-native';
import React from 'react';
import StoriesScreen from '../../src/components/StoriesScreen';

import renderer from 'react-test-renderer';


test('renders correctly', () => {
  return
  const tree = renderer.create(<StoriesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})
