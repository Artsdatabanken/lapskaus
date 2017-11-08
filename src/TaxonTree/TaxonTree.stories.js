import React from 'react';
import { storiesOf } from '@storybook/react';
import TaxonTree from './TaxonTree'
import {muiTheme} from 'storybook-addon-material-ui';

var dummyItems = [
    {
        "id": 1045,
        "aggreggatedCount": 494614,
        "scientificName": "Agaricomycetes",
        "popularName": null
    }];

storiesOf('Taxon Tree', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonTree items={dummyItems} />)
