import React from 'react';
import renderer from 'react-test-renderer';

import Tab_Health from '../Tab';

it('renders correctly', () => {
    const tree = renderer.create(<Tab />).toJSON();
    expect(tree).toMatchSnapshot();
});
