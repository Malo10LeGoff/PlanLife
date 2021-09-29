import React from 'react';
import renderer from 'react-test-renderer';

import SignInScreen from '../SignInScreen';

describe('<SignInScreen />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<SignInScreen />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
