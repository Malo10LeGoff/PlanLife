import React from 'react';
import renderer from 'react-test-renderer';

import Task from '../Task';

describe('<Task />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<Task />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
