import React from 'react';
import renderer from 'react-test-renderer';

import Tab_Health from '../Tab_Health';

it('renders correctly', () => {
    const tree = renderer.create(<Tab_Health />).toJSON();
    expect(tree).toMatchSnapshot();
});
