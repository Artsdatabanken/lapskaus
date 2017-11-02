import React from 'react';
import { storiesOf } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import TaxonSearch from './TaxonSearch'

storiesOf('Taxon Search', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonSearch />)
