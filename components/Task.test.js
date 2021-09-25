import React from 'react';
import renderer from 'react-test-renderer';
import Task from './Task';

test('renders correctly', () => {
    const tree = renderer.create(<Task text={"mock_task"} />).toJSON();
    expect(tree).toMatchSnapshot();
});