import React from 'react';
import renderer from 'react-test-renderer';

import TaskListScreen from '../TaskListScreen';

it('renders correctly', () => {
    const tree = renderer.create(<TaskListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});