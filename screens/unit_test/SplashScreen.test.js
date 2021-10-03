import React from 'react';
import renderer from 'react-test-renderer';

import SplashScreen from '../SplashScreen';

describe('<SplashScreen />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<SplashScreen />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
