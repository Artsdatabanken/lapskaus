import React from 'react';
import { storiesOf } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import TaxonLocations from './TaxonLocations'

storiesOf('Taxon Locations', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonLocations taxonId={0} width={1237} height={1552}/>)
