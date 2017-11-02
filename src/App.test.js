import React from 'react';
import AppBarEG from './AppBar/AppBarEG';
import App from './App'
import renderer from 'react-test-renderer';
import backend from './backend';

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


    jest.mock('./backend', () => ({
        loadTaxonTree: jest.fn()
    }));

it('renders without crashing', () => {
    backend.loadTaxonTree.mockImplementation(success => new Promise((resolve, reject) => resolve(dummyItems)))
    renderer.create(<App />)
    expect(backend.loadTaxonTree.mock.calls).toHaveLength(1);
})
