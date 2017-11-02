import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {muiTheme} from 'storybook-addon-material-ui';
import AppBar from './AppBarEG'

storiesOf('App Bar', module)
.addDecorator(muiTheme())
.add('root', () => <AppBar onClick={action('click')}></AppBar>)
.add('down into tree', () => <AppBar></AppBar>)
