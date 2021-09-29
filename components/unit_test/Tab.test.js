import React from 'react';
import renderer from 'react-test-renderer';

import Tab_Health from '../Tab_Health';

describe('<Tab_Health />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<Tab_Health />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
