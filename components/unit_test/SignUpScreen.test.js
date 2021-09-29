import React from 'react';
import renderer from 'react-test-renderer';

import SignUpScreen from '../SignUpScreen';

describe('<SignUpScreen />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<SignUpScreen />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
