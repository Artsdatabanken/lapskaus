import React from 'react';
import AppBarEG from './AppBarEG';
import TaxonTree from './TaxonTree';
import renderer from 'react-test-renderer';

var dummyItems = [
    {
        "Id": 1,
        "TaxonCategory": 0,
        "ScientificNameId": 0,
        "ScientificName": "Animalia",
        "PopularName": "dyreriket",
        "ObservationCount": 8,
        "CumulativeObservationCount": 18588919
    }];

it('renders without crashing', () => {
    expect(renderer.create(<TaxonTree items={dummyItems} />).toJSON()).toMatchSnapshot();
    expect(renderer.create(<AppBarEG />).toJSON()).toMatchSnapshot();
});

