import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    expect(renderer.create(<App />).toJSON()).toMatchSnapshot();
});

