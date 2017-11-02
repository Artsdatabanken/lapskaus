import React from 'react';
import { storiesOf } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import TaxonLocations from './TaxonLocations'

storiesOf('Taxon Locations', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonLocations />)
