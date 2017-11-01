import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSearch from 'material-ui/svg-icons/action/search';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

function AppBarEG(props) {
    return(
        <MuiThemeProvider>
            <AppBar
                title={<span style={styles.title}>Artstre</span>}
                onTitleTouchTap={() => props.onClick(0)}
                iconElementLeft={<IconButton
                    onClick={() => props.onClick(1)}    // todo: goto parent
                ><NavigationBack/></IconButton>}
                iconElementRight={<IconButton><ActionSearch /></IconButton>}
            />
        </MuiThemeProvider>
    )
}

export default AppBarEG;