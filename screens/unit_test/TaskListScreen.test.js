import React from 'react';
import renderer from 'react-test-renderer';

import TaskListScreen from '../TaskListScreen';

describe('<TaskListScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<TaskListScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
