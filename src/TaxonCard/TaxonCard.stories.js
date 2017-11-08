import React from 'react';
import renderer from 'react-test-renderer';
import { storiesOf } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import TaxonCard from "./TaxonCard";

storiesOf('Taxon Card', module)
.addDecorator(muiTheme())
.add('default', () => <TaxonCard taxon={{id: 196}} />)
