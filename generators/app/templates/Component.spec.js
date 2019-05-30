import React from 'react';
import <%= name %> from './<%= name %>';
import { shallow } from 'enzyme';

describe('<%= name %> Tests', () => {
  it('renders without crashing', () => {
    const wrapComponent = shallow(<<%= name %> />);
    expect(wrapComponent.toJSON()).toMatchSnapshot();
  });
});
