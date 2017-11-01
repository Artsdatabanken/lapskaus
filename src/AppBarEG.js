import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionSearch from 'material-ui/svg-icons/action/search';

function handleTouchTap() {
    alert('onClick triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const AppBarEG = () => (
    <MuiThemeProvider>
        <AppBar
            title={<span style={styles.title}>Artsgrupper</span>}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<IconButton><ActionSearch /></IconButton>}
        />
    </MuiThemeProvider>
);

export default AppBarEG;