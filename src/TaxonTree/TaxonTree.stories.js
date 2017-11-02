import React from 'react';
import { storiesOf } from '@storybook/react';
import TaxonTree from './TaxonTree'
import {muiTheme} from 'storybook-addon-material-ui';

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

storiesOf('Taxon Tree', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonTree items={dummyItems} />)
